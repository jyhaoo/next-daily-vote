"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "../types/supabase";

export default async function createSupabaseServer() {
  const cookieStore = cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return createServerClient<Database>(url, anon_key, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
    },
  });
}
