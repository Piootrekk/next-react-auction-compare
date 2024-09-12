import { getAuctionByIdWithBids } from "@/api/endpoints";
import CurrentAction from "@/components/page-components/auctionId/currentAction";

import AuctionIdSkeleton from "@/components/page-components/loading/AuctionIdSkeleton";
import useFetchCallback from "@/hooks/useFetchCallback";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const AuctionId = () => {
  const { id } = useParams();
  const singleAuction = useFetchCallback(getAuctionByIdWithBids);

  useEffect(() => {
    singleAuction.execute(id);
  }, []);

  if (singleAuction.isLoading) {
    return <AuctionIdSkeleton />;
  }

  if (!singleAuction.data) {
    return <AuctionIdSkeleton />;
  }

  return <CurrentAction singleAuction={singleAuction.data} />;
};

export default AuctionId;
