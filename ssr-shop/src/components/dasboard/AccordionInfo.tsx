import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type TBullshitText = {
  title: string;
  description: string;
};

const AccordionInfo = () => {
  const bullshitText: TBullshitText[] = [
    {
      title: "What is this?",
      description:
        "This is a simple auction app that allows you to create auctions and bid on them.",
    },
    {
      title: "How to use?",
      description:
        "Create an account and start creating auctions. You can also bid on other auctions.",
    },
    {
      title: "Is it free?",
      description: "Yes, it is free to use.",
    },
    {
      title: "How to contact?",
      description: "You can contact us at asdasd@xd.pl",
    },
    {
      title: "How to create an auction?",
      description:
        "Go to the auctions page and click on the new auction button.",
    },
    {
      title: "How to bid on an auction?",
      description:
        "Go to the auction page and click on the bid button. You can also set the maximum bid.",
    },
    {
      title: "How to win an auction?",
      description:
        "The highest bid at the end of the auction wins the auction.",
    },
  ];
  return (
    <Accordion type="single" collapsible className="w-full my-11 px-11">
      {bullshitText.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionInfo;
