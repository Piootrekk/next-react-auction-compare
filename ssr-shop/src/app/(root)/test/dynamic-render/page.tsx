"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DynamicRender = () => {
  const [amount, setAmount] = useState<string | undefined>(undefined);

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setAmount(formData.get("amount") as string);
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold pb-8">Static Render: {amount}</h1>
      <form onSubmit={handleChange} className="flex flex-row gap-4">
        <Input placeholder="Amount" type="number" name="amount" />
        <Button type="submit">Submit</Button>
      </form>
      <div className="justify-center flex flex-row flex-wrap items-center my-12 gap-y-8">
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: parseInt(amount!) }).map((_, index) => (
            <div key={index} className="w-2 h-2 bg-secondary"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicRender;
