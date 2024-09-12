import { TAuction } from "@/api/endpoints";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Timer } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type MyAuctionsCardProps = {
  myAuctions: TAuction[];
};

const endpoint = import.meta.env.VITE_BACKET_ENDPOINT;

if (!endpoint) {
  throw new Error("VITE_BACKET_ENDPOINT is not defined");
}

const MyAuctionsCard: React.FC<MyAuctionsCardProps> = ({ myAuctions }) => {
  if (myAuctions.length === 0) {
    return (
      <div className="container my-12 gap-y-8">
        <h1 className="text-3xl font-bold pb-8">All available auctions</h1>
        <p className="text-2xl text-muted">No auctions available</p>
      </div>
    );
  }
  return (
    <div className="container my-12 gap-y-8">
      <h1 className="text-3xl font-bold pb-8">All available auctions</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {myAuctions.map((auction) => (
          <Card key={auction.id}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {auction.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="gap-y-4">
              <img
                src={`${endpoint}/${auction.image_path}`}
                alt={auction.title}
                width={300}
                height={300}
              />
              <p className="text-lg font-semibold mt-4">
                Starting bid price: {auction.starting_bid} USD
              </p>
              {auction.current_bid ? (
                <p className="text-lg font-semibold">
                  Current bid price: {auction.current_bid} USD
                </p>
              ) : (
                <p className="text-lg font-semibold">No bids yet</p>
              )}
              <p className="text-lg flex flex-row">
                <Timer size={24} className="mr-2" />
                <span>
                  {"End date: "}
                  {format(
                    new Date(auction.end_time),
                    "eeee dd/MM/yyyy hh:mm:ss"
                  )}
                </span>
              </p>
              <Link to={`/auctions/${auction.id}`} className="w-fit">
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="mt-4 w-full"
                >
                  View auction
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyAuctionsCard;
