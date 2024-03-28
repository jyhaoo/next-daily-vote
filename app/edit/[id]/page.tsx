import EditVoteForm from "./EditVoteForm";
import { getVoteById } from "@/lib/action/vote";
import { IVote } from "@/lib/types";
import { redirect } from "next/navigation";

export default async function page({ params }: { params: { id: string } }) {
  const { data: vote } = await getVoteById(params.id);

  if (!vote) {
    return redirect("/404");
  }

  return (
    <div className="max-w-5xl mx-auto">
      <EditVoteForm vote={vote as IVote} />
    </div>
  );
}
