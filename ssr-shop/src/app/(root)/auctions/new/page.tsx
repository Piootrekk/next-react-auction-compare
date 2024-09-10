import { authCheck } from "@/actions/authCheck";
import { Card } from "@/components/ui/card";
import { redirect } from "next/navigation";

import React from "react";
import NewAuctionForm from "./newAuctionForm";
import LoadingNew from "./loading";

const AuctionCreate = async () => {
  const { data } = await authCheck();

  if (!data.user) {
    redirect("/");
  }

  return (
    <>
      <h1 className="md:text-4xl text-3xl font-bold px-2">New auction</h1>
      <Card className="max-w-xl mt-8">
        <NewAuctionForm />
      </Card>
    </>
  );
};

export default AuctionCreate;
