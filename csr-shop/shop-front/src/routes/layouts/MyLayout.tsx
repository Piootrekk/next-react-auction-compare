import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MyLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/login", { replace: true });
    }
  }, []);
  const { isAuthorized } = useAuth();

  return (
    <main className="mt-12">
      <div className="flex flex-row flex-wrap justify-center items-center gap-12">
        <Link to={`/auctions/my`} className="w-1/3 min-w-36">
          <Button size="lg" variant="outline" type="button" className="w-full">
            Created auctions
          </Button>
        </Link>
        <Link to={`/auctions/my/bids-history`} className="w-1/3 min-w-36">
          <Button size="lg" variant="outline" type="button" className="w-full">
            Bids
          </Button>
        </Link>
      </div>
      <Outlet />
    </main>
  );
};

export default MyLayout;
