import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account, if you have one.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
