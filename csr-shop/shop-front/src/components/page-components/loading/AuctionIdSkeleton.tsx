import { Skeleton } from "@/components/ui/skeleton";
import BidsSkeleton from "./BidsSkeleton";

const AuctionIdSkeleton = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 gap-6">
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-full h-[400]" />
          <Skeleton className="w-full h-12" />
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-full h-8" />
        </div>
        <div className="flex flex-col w-1/2 gap-6">
          <BidsSkeleton />
        </div>
      </div>
    </div>
  );
};

export default AuctionIdSkeleton;
