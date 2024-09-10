"use server";

import createServerClientSupabase from "@/lib/supabase/server";
import { TNewAuctionSchema } from "../schema/newAuctionSchema";
import { TAuction, TAuctionWithBids } from "@/lib/schema/dbSchema";
export const insertNewAuction = async (
  newAuctionData: TNewAuctionSchema,
  user_id: string
) => {
  const supabase = createServerClientSupabase();

  const storageObj = await supabase.storage
    .from("auction_images")
    .upload(newAuctionData.image.name, newAuctionData.image);

  if (storageObj.error) {
    return { error: storageObj.error.message };
  }

  const { error } = await supabase.from("auction").insert([
    {
      user_id,
      title: newAuctionData.title,
      description: newAuctionData.description
        ? newAuctionData.description
        : null,
      starting_bid: newAuctionData.startingPrice,
      interval_bid: newAuctionData.intetvalPrice,
      end_time: newAuctionData.endsAt,
      image_path: newAuctionData.image.name,
    },
  ]);

  if (error) {
    return { error: error.message };
  }
  return { success: true };
};

export const getAllAuctions = async () => {
  const supabase = createServerClientSupabase();

  const { data, error } = await supabase.from("auction").select("*");

  if (error) {
    return { error: error.message };
  }

  return { data: data as TAuction[] };
};

export const getUserAuctions = async (user_id: string) => {
  const supabase = createServerClientSupabase();

  const { data, error } = await supabase
    .from("auction")
    .select("*")
    .eq("user_id", user_id);

  if (error) {
    return { error: error.message };
  }

  return { data };
};

export const getAuctionByIdWithBids = async (auction_id: string) => {
  const supabase = createServerClientSupabase();

  const { data, error } = await supabase
    .from("auction")
    .select(
      "id, created_at, title, user_id, description, starting_bid, interval_bid, current_bid, end_time, image_path, bid (id, created_at, auction_id, user_id, bid_amount)"
    )
    .eq("id", auction_id)
    .single();

  if (error) {
    return { error: error.message };
  }

  return { data: data as TAuctionWithBids };
};

export const insertNewBid = async (
  auction_id: string,
  user_id: string,
  bid_amount: number
) => {
  const supabase = createServerClientSupabase();

  const { error } = await supabase.from("bid").insert([
    {
      auction_id,
      user_id,
      bid_amount,
    },
  ]);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
};

export const updateCurrentBid = async (
  auction_id: string,
  bid_amount: number
) => {
  const supabase = createServerClientSupabase();

  const { error } = await supabase
    .from("auction")
    .update({
      current_bid: bid_amount,
    })
    .eq("id", auction_id);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
};

export const getAllUserBids = async (user_id: string) => {
  const supabase = createServerClientSupabase();

  const { data, error } = await supabase
    .from("bid")
    .select("*")
    .eq("user_id", user_id);

  if (error) {
    return { error: error.message };
  }

  return { data: data as TAuctionWithBids["bid"] };
};
