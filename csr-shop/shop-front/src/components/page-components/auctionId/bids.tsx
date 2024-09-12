import { TAuctionWithBids } from "@/api/endpoints";

type BidsProps = {
  bids: TAuctionWithBids["bid"];
};

const Bids: React.FC<BidsProps> = ({ bids }) => {
  return (
    <div className="space-y-4">
      {bids.map((bid) => (
        <div key={bid.id} className="flex justify-between items-center">
          <span className="text-lg">
            <span className="font-bold">${bid.bid_amount}</span>
          </span>
          <span className="text-muted-foreground">
            {new Date(bid.created_at).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Bids;
