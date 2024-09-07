import { authCheck } from "@/actions/authCheck";
import { redirect } from "next/navigation";

const MyAuctions = async () => {
  const { data } = await authCheck();

  if (!data.user) {
    redirect("/");
  }
  return <div>My Auctions </div>;
};

export default MyAuctions;
