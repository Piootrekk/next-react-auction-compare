import {
  BadgeDollarSign,
  HammerIcon,
  LucideMonitorSmartphone,
  MailWarning,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";

type TCardItem = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const Futures = () => {
  const cardItems: TCardItem[] = [
    {
      title: "Create Auctions",
      description: "Create auctions and start selling your items",
      icon: <LucideMonitorSmartphone className="h-12 w-12" />,
    },
    {
      title: "Bid on Auctions",
      description: "Bid on auctions and get your favorite items",
      icon: <BadgeDollarSign className="h-12 w-12" />,
    },
    {
      title: "Monitor Auctions",
      description: "Manage your auctions and see your sales",
      icon: <MailWarning className="h-12 w-12" />,
    },
    {
      title: "Win Auctions",
      description: "Win auctions and get your items",
      icon: <HammerIcon className="h-12 w-12" />,
    },
  ];
  return (
    <div className="flex flex-row flex-wrap justify-center items-stretch gap-4 pt-24 py-11 w-3/4 ">
      {cardItems.map((item, index) => (
        <Card key={index} className="w-48">
          <CardHeader className="flex flex-col gap-2 items-center">
            <CardTitle>{item.title}</CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center">
              {item.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Futures;
