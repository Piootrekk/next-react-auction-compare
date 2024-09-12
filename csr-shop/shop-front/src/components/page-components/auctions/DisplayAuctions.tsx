import { TAuction } from "@/api/endpoints";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Timer } from "lucide-react";
import { isActualDate } from "@/utils/isActualDate";

type DisplayAuctionsProps = {
  auctions: TAuction[];
};

const DisplayAuctions: React.FC<DisplayAuctionsProps> = ({ auctions }) => {
  const endpoint = import.meta.env.VITE_BACKET_ENDPOINT;

  if (!endpoint) {
    throw new Error("VITE_BACKET_ENDPOINT is not defined");
  }

  return (
    <div className="container my-12 gap-y-8">
      <h1 className="text-3xl font-bold pb-8">All available auctions</h1>
      {auctions.length === 0 && (
        <p className="text-lg text-muted-foreground">No auctions available</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {auctions.map((auction) => (
          <Card key={auction.id}>
            <CardHeader>
              <CardTitle>{auction.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={`${endpoint}/${auction.image_path}`}
                alt={auction.title}
                className="w-full h-48 object-cover"
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
                  {isActualDate(new Date(auction.end_time))
                    ? "Bid now"
                    : "View auction"}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DisplayAuctions;
