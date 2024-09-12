import { TAuctionWithBids } from "@/api/endpoints";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/AuthContext";
import { isActualDate } from "@/utils/isActualDate";
import { Button } from "@/components/ui/button";
import Bids from "./bids";
import Timer from "./timer";
import PlaceBidForm from "./placeBidForm";
import { redirect } from "react-router-dom";

type CurrentActionProps = {
  singleAuction: TAuctionWithBids;
};

const CurrentAction: React.FC<CurrentActionProps> = ({ singleAuction }) => {
  const endpoint = import.meta.env.VITE_BACKET_ENDPOINT;
  if (!endpoint) {
    throw new Error("VITE_BACKET_ENDPOINT is not defined");
  }

  const { user } = useAuth();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="space-y-8">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 gap-6">
          {!isActualDate(new Date(singleAuction.end_time)) && (
            <Badge className="w-fit" variant="destructive">
              Bidding Over
            </Badge>
          )}
          <h1 className="text-4xl font-bold">
            <span className="font-normal">Auction for</span>{" "}
            {singleAuction.title}
          </h1>
          <img
            src={`${endpoint}/${singleAuction.image_path}`}
            alt={singleAuction.title}
            width={400}
            height={400}
            className="rounded-md"
          />
          {singleAuction.description && (
            <p className="text-lg text-muted-foreground">
              {singleAuction.description}
            </p>
          )}
          <div className="text-xl space-y-4">
            {singleAuction.current_bid && (
              <div>
                Current Bid{" "}
                <span className="font-bold">${singleAuction.current_bid}</span>
              </div>
            )}
            <div>
              Starting Price of{" "}
              <span className="font-bold">${singleAuction.starting_bid}</span>
            </div>
            <div>
              Bid Interval{" "}
              <span className="font-bold">${singleAuction.interval_bid}</span>
            </div>
          </div>
          <div>
            <Timer time={singleAuction.end_time} />
          </div>
        </div>
        <div className="space-y-4 flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Auction Bids</h2>
            {isActualDate(new Date(singleAuction.end_time)) &&
            singleAuction.user_id !== user?.id &&
            user ? (
              <PlaceBidForm
                bid_amount={
                  singleAuction.current_bid
                    ? singleAuction.current_bid + singleAuction.interval_bid
                    : singleAuction.starting_bid
                }
                auction_id={singleAuction.id}
              />
            ) : (
              <Button disabled variant={"outline"} className="w-24">
                Place Bid
              </Button>
            )}
          </div>
          {singleAuction.bid.length > 0 ? (
            <Bids bids={singleAuction.bid} />
          ) : (
            <p className="text-muted-foreground">No bids yet</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default CurrentAction;
