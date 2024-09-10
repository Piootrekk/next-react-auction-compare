import AuctionCardLoading from "@/components/loading/auctionCardLoading";

const Loading = () => {
  return (
    <div className="container my-12 gap-y-8">
      <div className="flex flex-row flex-wrap gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <AuctionCardLoading key={index} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
