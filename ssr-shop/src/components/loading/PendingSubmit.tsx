"use client";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "../ui/button";
import LoadingSpin from "./LoadingSpin";

type PendingSubmitProps = {
  buttonName: string;
} & ButtonProps;

const PendingSubmit: React.FC<PendingSubmitProps> = ({
  buttonName,
  ...rest
}) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full p-2" {...rest}>
      {pending ? <LoadingSpin /> : buttonName}
    </Button>
  );
};

export default PendingSubmit;
