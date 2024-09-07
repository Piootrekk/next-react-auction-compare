import { authCheck } from "@/actions/authCheck";
import { Card } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";

import React from "react";

const AuctionCreate = async () => {
  const { data } = await authCheck();

  if (!data.user) {
    redirect("/");
  }

  return (
    <Card className="flex p-8 space-y-4 w-fit mt-12">
      <h1 className="md:text-4xl text-2xl font-bold">Create a new auction</h1>
      <Input name="Title" placeholder="Title" className="max-w-md" />
      <Input
        name="Description"
        placeholder="Description"
        className="max-w-md"
      />
      <Input name="Price" placeholder="Price" className="max-w-md" />
    </Card>
  );
};

export default AuctionCreate;
