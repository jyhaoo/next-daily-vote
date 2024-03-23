import { Suspense } from "react";
import ListVoteLoading from "@/components/ListVoteLoading";
import ListVote from "@/components/ListVote";
import { listActiveVotes, listExpiredVotes } from "@/lib/actions/vote";

export default function Home() {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold text-green-500">Active Votes 📣</h1>

      <Suspense fallback={<ListVoteLoading />}>
        <ActiveVote />
      </Suspense>
      <h1 className="text-2xl font-bold text-red-400">Past Votes 🤖</h1>
      <Suspense fallback={<ListVoteLoading />}>
        <ExpiredVote />
      </Suspense>
    </div>
  );
}

const ActiveVote = async () => {
  const { data: votes } = await listActiveVotes();
  if (!votes?.length) {
    return <h1>No vote yet 😅</h1>;
  }
  return <ListVote votes={votes} />;
};

const ExpiredVote = async () => {
  const { data: votes } = await listExpiredVotes();
  if (!votes?.length) {
    return <h1>No votes yet 😅</h1>;
  }
  return <ListVote votes={votes} isExpire={true} />;
};
