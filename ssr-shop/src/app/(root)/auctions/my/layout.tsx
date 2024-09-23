import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "User auctions",
  description: "Your auctions and bids history.",
  keywords: ["auctions", "bids", "history", "created auctions"],
};

export default function LayoutAuction({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-12">
      <div className="flex flex-row flex-wrap justify-center items-center gap-12">
        <Link href={`/auctions/my`} className="w-1/3 min-w-36">
          <Button size="lg" variant="outline" type="button" className="w-full">
            Created auctions
          </Button>
        </Link>
        <Link href={`/auctions/my/bids-history`} className="w-1/3 min-w-36">
          <Button size="lg" variant="outline" type="button" className="w-full">
            Bids
          </Button>
        </Link>
      </div>
      {children}
    </main>
  );
}
