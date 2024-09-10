import { Skeleton } from "@/components/ui/skeleton";
import LoadingAuction from "../../auctions/loading";
const Loading = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center gap-12">
        <Skeleton className="w-1/3 h-12" />
        <Skeleton className="w-1/3 h-12" />
      </div>
      <LoadingAuction />
    </>
  );
};

export default Loading;
