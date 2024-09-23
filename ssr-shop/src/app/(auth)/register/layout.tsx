import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register a new account",
  keywords: ["register", "signup", "account"],
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen container mx-auto">
      <main>{children}</main>
    </div>
  );
}
