import { Skeleton } from "./ui/skeleton";

export default function ListVoteLoading() {
  return (
    <div className="w-full mx-auto py-10 px-10 md:p-5 grid-cols-3 md:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-dense grap-y-20 gap-10">
      {[1, 2, 3].map((value) => {
        return (
          <div key={value} className="border rounded-md p-5 space-y-5">
            <div className="flex items-center gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-2 w-32 rounded-full" />
            </div>
            <Skeleton className="h-5 w-48 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>
        );
      })}
    </div>
  );
}
