import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register a new account",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
