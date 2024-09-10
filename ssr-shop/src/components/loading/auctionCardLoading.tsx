import React from "react";
import { Skeleton } from "../ui/skeleton";

const AuctionCardLoading = () => {
  return (
    <div className="w-[350px] h-[500px] p-12 my-6 border rounded-lg">
      <Skeleton className="w-full h-8 mb-4" />
      <Skeleton className="w-full h-48 mb-4" />
      <Skeleton className="w-full h-6 mb-4" />
      <Skeleton className="w-full h-12 mb-4" />
      <Skeleton className="w-full h-12 mb-4" />
    </div>
  );
};

export default AuctionCardLoading;
