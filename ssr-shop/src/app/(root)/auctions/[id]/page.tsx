import { getAuctionByIdWithBids } from "@/lib/supabase/queries";
import { isActualDate } from "@/utils/isActualDate";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TAuctionWithBids } from "@/lib/schema/dbSchema";
import FormBid from "./formBid";

type AuctionIdProps = {
  params: {
    id: string;
  };
};

const endpoint = process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT;

if (!endpoint) {
  throw new Error("Missing env variable NEXT_PUBLIC_SUPABASE_ENDPOINT");
}

const AuctionId: React.FC<AuctionIdProps> = async ({ params: { id } }) => {
  const { data } = await getAuctionByIdWithBids(id);
  console.log(id);
  if (!data) {
    return <div>Auction not found</div>;
  }

  return (
    <main className="space-y-8">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 gap-6">
          {!isActualDate(new Date(data.end_time)) && (
            <Badge className="w-fit" variant="destructive">
              Bidding Over
            </Badge>
          )}
          <h1 className="text-4xl font-bold">
            <span className="font-normal">Auction for</span> {data.title}
          </h1>
          <Image
            src={`${endpoint}${data.image_path}`}
            alt={data.title}
            width={400}
            height={400}
            className="rounded-md"
          />
          {data.description && (
            <p className="text-lg text-muted-foreground">{data.description}</p>
          )}
          <div className="text-xl space-y-4">
            {data.current_bid && (
              <div>
                Current Bid{" "}
                <span className="font-bold">${data.current_bid}</span>
              </div>
            )}
            <div>
              Starting Price of{" "}
              <span className="font-bold">${data.starting_bid}</span>
            </div>
            <div>
              Bid Interval{" "}
              <span className="font-bold">${data.interval_bid}</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Auction Bids</h2>
            <FormBid
              bid_amount={
                data.current_bid
                  ? data.current_bid + data.interval_bid
                  : data.starting_bid
              }
              auction_id={id}
            />
          </div>
          {data.bid.length > 0 ? (
            <Bids bids={data.bid} />
          ) : (
            <div className="text-muted-foreground">No bids yet</div>
          )}
        </div>
      </div>
    </main>
  );
};

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

export default AuctionId;
