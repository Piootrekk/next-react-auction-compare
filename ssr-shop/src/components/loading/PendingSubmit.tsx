"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import LoadingSpin from "./LoadingSpin";

type PendingSubmitProps = {
  buttonName: string;
};

const PendingSubmit: React.FC<PendingSubmitProps> = ({ buttonName }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full p-2">
      {pending ? <LoadingSpin /> : buttonName}
    </Button>
  );
};

export default PendingSubmit;
