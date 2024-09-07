import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account, if you have one.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen container mx-auto">
      <main>{children}</main>
    </div>
  );
}
