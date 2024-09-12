import { insertNewBid } from "@/api/endpoints";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import useFetchCallback from "@/hooks/useFetchCallback";

type FormBidProps = {
  bid_amount: number;
  auction_id: string;
};

const PlaceBidForm: React.FC<FormBidProps> = ({ bid_amount, auction_id }) => {
  const { execute: placeBid } = useFetchCallback(insertNewBid);
  const { user } = useAuth();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    placeBid(user?.session.access_token, auction_id, bid_amount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" className="btn btn-primary">
        Place bid
      </Button>
    </form>
  );
};

export default PlaceBidForm;
