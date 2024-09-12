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
import { authMiddleware } from "../middlewares/loggedin";
import upload from "../middlewares/file";

const router = Router();

router.post(
  "/create-auction",
  upload.single("image"),
  authMiddleware,
  async (req, res) => {
    const { title, description, starting_bid, interval_bid, end_time } =
      req.body;
    const image = req.file;
    if (!image) {
      return res.status(400).json({ error: "Image is required" });
    }

    const user = req.user as User;
    const newAuctionData = {
      title,
      description,
      startingPrice: starting_bid,
      intetvalPrice: interval_bid,
      image: image,
      endsAt: end_time,
    } as TNewAuctionSchema;
    const { success, error } = await insertNewAuction(newAuctionData, user.id);
    if (error) {
      return res.status(400).json({ error });
    }
    return res.status(201).json({ success });
  }
);

router.get("/all-auctions", async (req, res) => {
  const { data, error } = await getAllAuctions();
  if (error) {
    return res.status(400).json({ error });
  }
  return res.json(data);
});

router.get("/my-auctions", authMiddleware, async (req, res) => {
  const user = req.user as User;
  const { data, error } = await getUserAuctions(user.id as string);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.json(data);
});

router.get("/auction/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await getAuctionByIdWithBids(id);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.json(data);
});

router.post("/new-bid", authMiddleware, async (req, res) => {
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

router.get("/my-bids", authMiddleware, async (req, res) => {
  const user = req.user as User;
  const { data, error } = await getAllUserBids(user.id as string);
  if (error) {
    return res.status(400).json({ error });
  }
  return res.json(data);
});

export default router;
