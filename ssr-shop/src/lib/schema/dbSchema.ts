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

export type { TAuction, TAuctionWithBids };
