import { Skeleton } from "@/components/ui/skeleton";

const LoadingBidHistory = () => {
  return (
    <div className="space-y-4 mt-12">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-row flex-wrap justify-center items-center gap-12"
        >
          <Skeleton className="w-1/2 h-6 " />
        </div>
      ))}
    </div>
  );
};

export default LoadingBidHistory;
