"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/ui/fileInput";
import InputCalendar from "@/components/ui/input-calendar";
import { createNew } from "@/actions/createNew";
import { useFormState } from "react-dom";
import PendingSubmit from "@/components/loading/PendingSubmit";
import ErrorMessage from "@/components/error/ErrorMessage";

const NewAuctionForm = () => {
  const [error, action] = useFormState(createNew, undefined, "/");
  return (
    <form className="flex flex-col p-8 space-y-4 max-w-xl" action={action}>
      <ErrorMessage message={error?.sbError} />
      <Input
        name="title"
        placeholder="Title of your product"
        className="max-w-xl text-base"
        required
      />
      {error?.zodError?.title && (
        <ErrorMessage message={error.zodError.title} />
      )}
      <Input
        name="description"
        placeholder="Description of your product"
        className="max-w-xl text-base"
      />
      {error?.zodError?.description && (
        <ErrorMessage message={error.zodError.description} />
      )}
      <Input
        required
        className="max-w-xl text-base"
        name="startingPrice"
        type="number"
        step="0.01"
        min="0"
        placeholder="Starting price in USD"
      />
      {error?.zodError?.startingPrice && (
        <ErrorMessage message={error.zodError.startingPrice} />
      )}
      <Input
        required
        className="max-w-xl text-base"
        name="intetvalPrice"
        type="number"
        step="0.01"
        min="0"
        placeholder="Default outbid interval in USD"
      />
      {error?.zodError?.intetvalPrice && (
        <ErrorMessage message={error.zodError.intetvalPrice} />
      )}
      <FileInput name={"image"} className="max-w-xl text-base" />
      {error?.zodError?.image && (
        <ErrorMessage message={error.zodError.image} />
      )}
      <InputCalendar name={"endsAt"} className="max-w-xl text-base" />
      {error?.zodError?.endsAt && (
        <ErrorMessage message={error.zodError.endsAt} />
      )}
      <PendingSubmit
        type="submit"
        variant={"secondary"}
        size="lg"
        className="self-end"
        buttonName={"button"}
      >
        Create Auction
      </PendingSubmit>
    </form>
  );
};

export default NewAuctionForm;
