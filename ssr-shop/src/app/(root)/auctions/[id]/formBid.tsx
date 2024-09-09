"use client";

import { placeBid } from "@/actions/placeBid";
import ErrorMessage from "@/components/error/ErrorMessage";
import PendingSubmit from "@/components/loading/PendingSubmit";
import { useFormState } from "react-dom";

type FormBidProps = {
  bid_amount: number;
  auction_id: string;
};

const FormBid: React.FC<FormBidProps> = ({ bid_amount, auction_id }) => {
  const bidData = {
    bid_amount: bid_amount,
    auction_id: auction_id,
  };
  const handleEvent = placeBid.bind(null, bidData);
  const [error, action] = useFormState(handleEvent, undefined, "/");
  return (
    <form action={action}>
      <PendingSubmit
        type="submit"
        className="w-24"
        variant={"outline"}
        buttonName={`Bid ${bid_amount}`}
      />
      {error?.error && <ErrorMessage message={error.error} />}
    </form>
  );
};

export default FormBid;
