import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auctions",
  description: "Auctions for everyone, buy and sell your items.",
};

export default function LayoutAuction({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen container mx-auto">
      <main className="mt-12">{children}</main>
    </div>
  );
}
