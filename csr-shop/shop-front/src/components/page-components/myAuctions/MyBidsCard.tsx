import { TAuctionWithBids } from "@/api/endpoints";
import { Link } from "react-router-dom";

type MyBidsCardProps = {
  bids: TAuctionWithBids["bid"];
};

const MyBids: React.FC<MyBidsCardProps> = ({ bids }) => {
  if (bids.length === 0) {
    return (
      <div className="container my-12 gap-y-8">
        <h1 className="text-3xl font-bold pb-8">All available auctions</h1>
        <p className="text-xl text-muted-foreground">No auctions available</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4 mt-12">
        {bids.map((bid) => (
          <div
            key={bid.id}
            className="flex gap-x-14 justify-center  items-center"
          >
            <span className="text-lg">
              <span className="font-bold">${bid.bid_amount}</span>
            </span>
            <Link to={`/auctions/${bid.auction_id}`}>
              <span className="text-muted-foreground">{bid.auction_id}</span>
            </Link>
            <span className="text-muted-foreground">
              {new Date(bid.created_at).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyBids;
