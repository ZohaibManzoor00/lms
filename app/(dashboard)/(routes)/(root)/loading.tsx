import CardSkeleton from "@/components/card-skeleton";
import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="p-6 space-y-4 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Skeleton />
        <Skeleton />
      </div>
      <div className="flex gap-3">
        {Array.from({ length: 10 }, (_, idx) => (
          <Skeleton key={idx} className="min-w-24 h-7 rounded-md" />
        ))}
      </div>
        <div className="pt-3 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }, (_, idx) => (
            <div key={idx} className="mb-14">
              <Skeleton className="rounded h-40 w-full" />
              <div className="px-2">
                <Skeleton className="h-5 w-4/6 mt-3" />
                <Skeleton className="h-3 full mt-1" />
                <Skeleton className="h-6 w-5/12 mt-3" />
                <Skeleton className="h-2 w-full mt-3" />
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
