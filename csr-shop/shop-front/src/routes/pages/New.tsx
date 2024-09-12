import NewAuction from "@/components/new/NewAuction";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "react-router-dom";

const New = () => {
  const { isAuthorized } = useAuth();
  if (!isAuthorized) {
    redirect("/login");
  }

  return <NewAuction />;
};

export default New;
