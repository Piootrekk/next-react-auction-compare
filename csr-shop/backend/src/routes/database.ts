import { Router } from "express";
import {
  getAllAuctions,
  getAllUserBids,
  getAuctionByIdWithBids,
  getUserAuctions,
  insertNewAuction,
  insertNewBid,
  TNewAuctionSchema,
} from "./../supabase/db";
import { User } from "@supabase/supabase-js";
import { UploadedFile } from "express-fileupload";

const router = Router();

router.post("/create-auction", async (req, res) => {
  const { title, description, starting_bid, interval_bid, end_time } = req.body;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  const uploadedFile = req.files.file as UploadedFile;

  const user = req.user as User;
  const newAuctionData = {
    title,
    description,
    startingPrice: starting_bid,
    intetvalPrice: interval_bid,
    image: uploadedFile,
    endsAt: end_time,
  } as TNewAuctionSchema;
  const { success, error } = await insertNewAuction(
    newAuctionData,
    user.id as string
  );
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(201).json({ success });
});

router.get("/all-auctions", async (req, res) => {
  const { data, error } = await getAllAuctions();
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json({ data });
});

router.get("/my-auctions", async (req, res) => {
  const user = req.user as User;
  const { data, error } = await getUserAuctions(user.id as string);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json({ data });
});

router.get("/auction/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await getAuctionByIdWithBids(id);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json({ data });
});

router.post("/new-bid", async (req, res) => {
  const { auction_id, bid } = req.body;
  const user = req.user as User;
  const { success, error } = await insertNewBid(
    auction_id,
    user.id as string,
    bid
  );
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(201).json({ success });
});

router.get("/my-bids", async (req, res) => {
  const user = req.user as User;
  const { data, error } = await getAllUserBids(user.id as string);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(200).json({ data });
});

export default router;
