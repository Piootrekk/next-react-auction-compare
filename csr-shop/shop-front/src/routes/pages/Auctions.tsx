import { useEffect } from "react";
import useFetchCallback from "@/hooks/useFetchCallback";
import { getAllAuctions } from "@/api/endpoints";
import Error from "@/components/page-components/error/error";
import DisplayAuctions from "@/components/page-components/auctions/DisplayAuctions";
import AuctionSkeleton from "@/components/page-components/loading/AuctionSkeleton";

const Auctions = () => {
  const actions = useFetchCallback(getAllAuctions);
  useEffect(() => {
    actions.execute();
  }, []);

  if (actions.isLoading) {
    return <AuctionSkeleton />;
  }

  if (actions.error) {
    return <Error message={actions.error.message} />;
  }
  if (actions.data === null || actions.data === undefined) {
    return <div>No auctions available!</div>;
  }

  return <DisplayAuctions auctions={actions.data} />;
};

export default Auctions;
