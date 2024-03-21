import { createBrowserClient } from "@supabase/ssr";
import { Database } from "../types/supabase";

export function createSupabaseBrowser() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return createBrowserClient<Database>(url, anon_key);
}
