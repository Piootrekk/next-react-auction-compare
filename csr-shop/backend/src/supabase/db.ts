import { UploadedFile } from "express-fileupload";
import supabase from "./supabase";

export type TNewAuctionSchema = {
  title: string;
  description: string | null;
  startingPrice: number;
  intetvalPrice: number;
  image: Express.Multer.File;
  endsAt: string;
};

export type TAuction = {
  id: string;
  created_at: string;
  title: string;
  description: string;
  starting_bid: number;
  interval_bid: number;
  current_bid: number;
  end_time: string;
  image_path: string;
  user_id: string;
};

export type TAuctionWithBids = TAuction & {
  bid: {
    id: string;
    created_at: string;
    auction_id: string;
    user_id: string;
    bid_amount: number;
  }[];
};

export const insertNewAuction = async (
  newAuctionData: TNewAuctionSchema,
  user_id: string
) => {
  const storageObj = await supabase.storage
    .from("auction_images")
    .upload(newAuctionData.image.originalname, newAuctionData.image.buffer, {
      contentType: newAuctionData.image.mimetype,
    });

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
      image_path: newAuctionData.image.originalname,
    },
  ]);

  if (error) {
    return { error: error.message };
  }
  return { success: true };
};

export const getAllAuctions = async () => {
  const { data, error } = await supabase.from("auction").select("*");

  if (error) {
    return { error: error.message };
  }

  return { data: data as TAuction[] };
};

export const getUserAuctions = async (user_id: string) => {
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

  const upl = await supabase
    .from("auction")
    .update({
      current_bid: bid_amount,
    })
    .eq("id", auction_id);

  if (upl.error) {
    return { error: upl.error.message };
  }

  return { success: true };
};

export const getAllUserBids = async (user_id: string) => {
  const { data, error } = await supabase
    .from("bid")
    .select("*")
    .eq("user_id", user_id);

  if (error) {
    return { error: error.message };
  }

  return { data: data as TAuctionWithBids["bid"] };
};
