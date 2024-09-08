"use server";

import {
  TNewAuctionSchema,
  newAuctionSchema,
} from "@/lib/schema/newAuctionSchema";
import { authCheck } from "./authCheck";
import { redirect } from "next/navigation";
import { insertNewAuction } from "@/lib/supabase/queries";
import { returnZodErrorsObject } from "@/utils/returnZodErrorobject";

export const createNew = async (_previousState: any, formData: FormData) => {
  const { data } = await authCheck();

  if (!data.user) {
    redirect("/not-auth");
  }

  const newAuctionForm: TNewAuctionSchema = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    startingPrice: parseFloat(formData.get("startingPrice") as string),
    intetvalPrice: parseFloat(formData.get("intetvalPrice") as string),
    image: formData.get("image") as File,
    endsAt: formData.get("endsAt") as string,
  };
  const parsedData = newAuctionSchema.safeParse(newAuctionForm);
  if (!parsedData.success) {
    const errorObject = returnZodErrorsObject(parsedData.error.errors);
    return { zodError: errorObject };
  }
  const sendData = await insertNewAuction(parsedData.data, data.user.id);
  if (sendData.error) {
    return { sbError: sendData.error };
  }
  return { success: true };
};
