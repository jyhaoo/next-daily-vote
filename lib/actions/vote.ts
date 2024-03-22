"use server";

import createSupabaseServer from "../supabase/server";

export async function listActiveVotes() {
  const supabase = await createSupabaseServer();

  return supabase
    .from("vote")
    .select("*,users(*)")
    .filter("end_date", "gte", new Date().toISOString())
    .order("created_at", { ascending: true });
}
