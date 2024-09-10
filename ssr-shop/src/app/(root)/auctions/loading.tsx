import AuctionCardLoading from "@/components/loading/auctionCardLoading";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="container my-12 gap-y-8">
      <Skeleton className="w-1/4 h-8 mb-4" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <AuctionCardLoading key={index} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
