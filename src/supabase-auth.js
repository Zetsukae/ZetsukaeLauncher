import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

let supabaseClient = null;
let supabaseSession = null;
let authStateCallback = null;

function parseEnv(text) {
  const lines = String(text).split(/\r?\n/);
  const env = {};
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const [key, ...rest] = line.split('=');
    const value = rest.join('=').trim();
    env[key.trim()] = value.replace(/^"|"$/g, '');
  }
  return env;
}

async function loadEnvFile() {
  const candidates = ['../.env', './.env'];
  for (const candidate of candidates) {
    try {
      const response = await fetch(candidate, { cache: 'no-store' });
      if (!response.ok) {
        console.warn(`Supabase env not found at ${candidate}: ${response.status}`);
        continue;
      }
      const text = await response.text();
      const env = parseEnv(text);
      if (Object.keys(env).length > 0) {
        console.log(`Supabase env loaded from ${candidate}`, env);
        return env;
      }
    } catch (error) {
      console.warn(`Unable to fetch env from ${candidate}:`, error);
    }
  }
  console.warn('Supabase env file not found. Make sure .env is available in the frontend served folder.');
  return {};
}

function notifyAuthState() {
  if (typeof authStateCallback === 'function') {
    authStateCallback(supabaseSession);
  }
}

export async function initSupabaseAuth(onAuthStateChange) {
  authStateCallback = onAuthStateChange;
  const env = await loadEnvFile();
  const SUPABASE_URL = (env.SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
  const SUPABASE_ANON_KEY = (
    env.SUPABASE_ANON_KEY ||
    env.SUPABASE_PUBLISHABLE_KEY ||
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    ''
  ).trim();

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('Supabase credentials are not configured in .env.');
    notifyAuthState();
    return false;
  }

  try {
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        storageKey: 'zetsukae_launcher_supabase_session'
      }
    });

    if (supabaseClient.auth && typeof supabaseClient.auth.onAuthStateChange === 'function') {
      supabaseClient.auth.onAuthStateChange((_event, session) => {
        supabaseSession = session;
        notifyAuthState();
      });
    }

    if (supabaseClient.auth && typeof supabaseClient.auth.getSession === 'function') {
      const { data, error } = await supabaseClient.auth.getSession();
      if (!error) {
        supabaseSession = data?.session || null;
      }
    }

    notifyAuthState();
    return true;
  } catch (error) {
    console.error('Unable to initialize Supabase client:', error);
    notifyAuthState();
    return false;
  }
}

export async function openSupabaseSignIn() {
  if (!supabaseClient || !supabaseClient.auth || typeof supabaseClient.auth.signInWithOAuth !== 'function') {
    throw new Error('Supabase auth is not configured properly.');
  }

  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo: window.location.origin || ''
    }
  });

  if (error) {
    throw error;
  }

  return data?.url || '';
}

export async function signOutSupabase() {
  if (!supabaseClient || !supabaseClient.auth || typeof supabaseClient.auth.signOut !== 'function') {
    throw new Error('Supabase auth is not configured properly.');
  }

  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    throw error;
  }
  supabaseSession = null;
  notifyAuthState();
}
