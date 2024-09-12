import axiosInstance from "./axios";

type TNewAuctionSchema = {
  title: string;
  description: string | null;
  startingPrice: number;
  intetvalPrice: number;
  image: File;
  endsAt: string;
};

type TAuction = {
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

type TAuctionWithBids = TAuction & {
  bid: {
    id: string;
    created_at: string;
    auction_id: string;
    user_id: string;
    bid_amount: number;
  }[];
};

const getheader = (sessionId: string) => {
  return { Authorization: `Bearer ${sessionId}` };
};

const createAuction = async (
  sessionId: string,
  title: string,
  description: string,
  starting_bid: number,
  interval_bid: number,
  end_time: string,
  image: File
) => {
  const response = await axiosInstance({
    method: "POST",
    url: "/create-auction",
    headers: {
      ...getheader(sessionId),
      "Content-Type": "multipart/form-data",
    },
    data: {
      title,
      description,
      starting_bid,
      interval_bid,
      end_time,
      image,
    },
  });
  return response.data;
};

const getAllAuctions = async () => {
  const response = await axiosInstance<TAuction[]>({
    method: "GET",
    url: "/all-auctions",
  });
  return response.data;
};

const GetMyAuctions = async (sessionId: string) => {
  const response = await axiosInstance<TAuction>({
    method: "GET",
    url: "/my-auctions",
    headers: getheader(sessionId),
  });
  return response.data;
};

const getAuctionByIdWithBids = async (auctionId: string) => {
  const response = await axiosInstance<TAuctionWithBids>({
    method: "GET",
    url: `/auction/${auctionId}`,
  });
  return response.data;
};

const insertNewBid = async (
  sessionId: string,
  auctionId: string,
  bidAmount: number
) => {
  const response = await axiosInstance({
    method: "POST",
    url: `/new-bid`,
    headers: getheader(sessionId),
    data: {
      auction_id: auctionId,
      bid_amount: bidAmount,
    },
  });
  return response.data;
};

const getMyBids = async (sessionId: string) => {
  const response = await axiosInstance({
    method: "GET",
    url: "/my-bids",
    headers: getheader(sessionId),
  });
  return response.data;
};

export {
  createAuction,
  getAllAuctions,
  GetMyAuctions,
  getAuctionByIdWithBids,
  insertNewBid,
  getMyBids,
};

export type { TNewAuctionSchema, TAuction, TAuctionWithBids };
