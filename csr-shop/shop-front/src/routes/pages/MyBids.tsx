import { getMyBids } from "@/api/endpoints";
import BidsSkeleton from "@/components/page-components/loading/BidsSkeleton";
import MyBidsCard from "@/components/page-components/myAuctions/MyBidsCard";
import { useAuth } from "@/context/AuthContext";
import useFetchCallback from "@/hooks/useFetchCallback";
import { useEffect } from "react";

const MyBids = () => {
  const { user } = useAuth();
  const myBids = useFetchCallback(getMyBids);

  useEffect(() => {
    myBids.execute(user?.session.access_token);
  }, []);

  if (myBids.isLoading) {
    return <BidsSkeleton />;
  }

  if (myBids.data) return <MyBidsCard bids={myBids.data} />;
};

export default MyBids;
