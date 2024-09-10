import { authCheck } from "@/actions/authCheck";
import { getAllUserBids } from "@/lib/supabase/queries";
import Link from "next/link";
import { redirect } from "next/navigation";

const BidsHistory = async () => {
  const { data } = await authCheck();

  if (!data.user) {
    redirect("/not-auth");
  }

  const bids = await getAllUserBids(data.user.id);

  if (bids.error || bids.data === undefined) {
    redirect("/not-found");
  }

  if (bids.data.length === 0) {
    return (
      <div className="container my-12 gap-y-8">
        <h1 className="text-3xl font-bold pb-8">All available auctions</h1>
        <p className="text-2xl font-bold">No auctions available</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4 mt-12">
        {bids.data.map((bid) => (
          <div
            key={bid.id}
            className="flex gap-x-14 justify-center  items-center"
          >
            <span className="text-lg">
              <span className="font-bold">${bid.bid_amount}</span>
            </span>
            <Link href={`/auctions/${bid.auction_id}`}>
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

export default BidsHistory;
