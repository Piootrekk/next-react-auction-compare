import { GetMyAuctions } from "@/api/endpoints";
import AuctionSkeleton from "@/components/page-components/loading/AuctionSkeleton";
import MyAuctionsCard from "@/components/page-components/myAuctions/MyAuctionsCard";
import { useAuth } from "@/context/AuthContext";
import useFetchCallback from "@/hooks/useFetchCallback";
import { useEffect } from "react";
import { redirect } from "react-router-dom";

const MyAuctions = () => {
  const { user } = useAuth();
  if (!user) {
    redirect("/login");
  }
  
  const myAuctions = useFetchCallback(GetMyAuctions);

  useEffect(() => {
    myAuctions.execute(user?.session.access_token);
  }, []);

  if (myAuctions.isLoading) {
    return <AuctionSkeleton />;
  }

  if (myAuctions.data) return <MyAuctionsCard myAuctions={myAuctions.data} />;
};

export default MyAuctions;
