"use server";

import createSupabaseServer from "../supabase/server";
import { redirect } from "next/navigation";
import { Json } from "../types/supabase";

export async function listActiveVotes() {
  const supabase = await createSupabaseServer();

  return supabase
    .from("vote")
    .select("*,users(*)")
    .filter("end_date", "gte", new Date().toISOString())
    .order("created_at", { ascending: true });
}

export async function listExpiredVotes() {
  const supabase = await createSupabaseServer();

  return supabase
    .from("votes")
    .select("*,users(*)")
    .filter("end_date", "lte", new Date().toISOString())
    .order("created_at", { ascending: true });
}

export async function createVote(data: {
  vote_options: Json;
  end_date: Date;
  title: string;
  description?: string;
}) {
  const supabase = await createSupabaseServer();

  const { data: voteId, error } = await supabase.rpc("create_vote", {
    options: data.vote_options,
    title: data.title,
    end_date: new Date(data.end_date).toISOString(),
    description: data.description || "",
  });

  if (error) {
    throw "Fail to create vote: " + error.message;
  } else {
    redirect("/vote/" + voteId);
  }
}
