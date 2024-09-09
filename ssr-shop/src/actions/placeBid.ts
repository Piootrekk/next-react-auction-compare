"use server";

import { TBidData } from "@/lib/schema/bidData.type";
import { authCheck } from "./authCheck";
import { redirect } from "next/navigation";
import { insertNewBid, updateCurrentBid } from "@/lib/supabase/queries";
import { revalidatePath } from "next/cache";

export const placeBid = async (bidData: TBidData) => {
  const { auction_id, bid_amount } = bidData;
  const { data } = await authCheck();

  if (!data.user) {
    redirect("/not-auth");
  }

  const insertNewAuction = await insertNewBid(
    auction_id,
    data.user.id,
    bid_amount
  );

  if (insertNewAuction.error) {
    return { error: insertNewAuction.error };
  }
  const update = await updateCurrentBid(auction_id, bid_amount);

  if (update.error) {
    return { error: update.error };
  }
  revalidatePath(`/auctions/${auction_id}`, "layout");
};
