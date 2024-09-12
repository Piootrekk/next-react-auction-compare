import FileInput from "../ui/file-input";
import { Button } from "../ui/button";
import InputCalendar from "../ui/input-calendar";
import { Input } from "../ui/input";
import { getZodErrors } from "@/utils/getZodErrors";
import useFetchCallback from "@/hooks/useFetchCallback";
import { createAuction } from "@/api/endpoints";
import {
  newAuctionSchema,
  TNewAuctionSchema,
} from "@/lib/schema/newAuctionSchema";
import { useState } from "react";
import ErrorMessage from "../page-components/error/formError";
import LoadingSpin from "../page-components/loading/LoadingSpin";
import { useAuth } from "@/context/AuthContext";
const NewAuction = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { execute, isLoading } = useFetchCallback(createAuction);
  const { user } = useAuth();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formValues: TNewAuctionSchema = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      startingPrice: parseFloat(formData.get("startingPrice") as string),
      intetvalPrice: parseFloat(formData.get("intetvalPrice") as string),
      image: formData.get("image") as File,
      endsAt: formData.get("endsAt") as string,
    };

    const parseDData = newAuctionSchema.safeParse(formValues);
    if (!parseDData.success) {
      setErrors(getZodErrors(parseDData.error.errors));
    } else {
      setErrors({});
      console.log(parseDData.data);
      execute(
        user!.session.access_token,
        parseDData.data.title,
        parseDData.data.description,
        parseDData.data.startingPrice,
        parseDData.data.intetvalPrice,
        parseDData.data.endsAt,
        parseDData.data.image
      );
    }
  };

  return (
    <form className="flex flex-col p-8 space-y-4 max-w-xl" onSubmit={onSubmit}>
      <Input
        name="title"
        placeholder="Title of your product"
        className="max-w-xl text-base"
        required
      />
      {errors.title && <ErrorMessage message={errors.title} />}

      <Input
        placeholder="Description of your product"
        className="max-w-xl text-base"
        name="description"
      />
      {errors.description && <ErrorMessage message={errors.description} />}
      <Input
        required
        className="max-w-xl text-base"
        type="number"
        step="0.01"
        min="0"
        placeholder="Starting price in USD"
        name="startingPrice"
      />
      {errors.startingPrice && <ErrorMessage message={errors.startingPrice} />}
      <Input
        required
        className="max-w-xl text-base"
        type="number"
        step="0.01"
        min="0"
        name="intetvalPrice"
        placeholder="Default outbid interval in USD"
      />
      {errors.intetvalPrice && <ErrorMessage message={errors.intetvalPrice} />}
      <FileInput className="max-w-xl text-base" name="image" />
      {errors.image && <ErrorMessage message={errors.image} />}
      <InputCalendar className="max-w-xl text-base" name="endsAt" />
      {errors.endsAt && <ErrorMessage message={errors.endsAt} />}
      <Button
        type="submit"
        variant={"secondary"}
        size="lg"
        className="self-end"
      >
        {isLoading ? <LoadingSpin /> : "Create Auction"}
      </Button>
    </form>
  );
};

export default NewAuction;
