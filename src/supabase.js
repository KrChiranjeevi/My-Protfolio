import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; 
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Gracefully handle missing env vars — app will still render, but DB features won't work
if (!supabaseUrl || !supabaseKey) {
  console.warn("Supabase env vars not found. Database features will be disabled.");
}

export const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : null;