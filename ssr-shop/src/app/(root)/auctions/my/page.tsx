import { authCheck } from "@/actions/authCheck";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getUserAuctions } from "@/lib/supabase/queries";
import Link from "next/link";
import { redirect } from "next/navigation";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Timer } from "lucide-react";

const MyAuctions = async () => {
  const { data } = await authCheck();
  if (!data.user) {
    redirect("/not-auth");
  }

  const auctions = await getUserAuctions(data.user.id);
  if (auctions.error || auctions.data === undefined) {
    redirect("/not-found");
  }

  const endpoint = process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT;

  if (!endpoint) {
    throw new Error("Missing env variable NEXT_PUBLIC_SUPABASE_ENDPOINT");
  }

  if (auctions.data.length === 0) {
    return (
      <div className="container my-12 gap-y-8">
        <h1 className="text-3xl font-bold pb-8">All available auctions</h1>
        <p className="text-2xl font-bold">No auctions available</p>
      </div>
    );
  }

  return (
    <div className="container my-12 gap-y-8">
      <h1 className="text-3xl font-bold pb-8">All available auctions</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {auctions.data.map((auction) => (
          <Card key={auction.id}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {auction.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="gap-y-4">
              <Image
                src={`${endpoint}${auction.image_path}`}
                alt={auction.title}
                width={300}
                height={300}
                priority={false}
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
              <Link href={`/auctions/${auction.id}`} className="w-fit">
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

export default MyAuctions;

export const revalidate = 10;
