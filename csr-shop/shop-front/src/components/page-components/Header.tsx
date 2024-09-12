import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import acution from "@/images/auction.svg";
import { Button } from "../ui/button";

const Header = () => {
  const { isAuthorized, logoutState } = useAuth();
  return (
    <header className="bg-secondary">
      <div className="flex justify-between items-center p-4 container mx-auto gap-y-4 flex-wrap">
        <div className="flex items-center gap-2 gap-x-24 flex-wrap">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={acution}
              alt="logo"
              width={50}
              height={50}
              className="sm:block hidden"
            />
            <h1 className="sm:text-4xl text-2xl font-bold">CSR Auctions</h1>
            <br />
            Online
          </Link>
          {isAuthorized ? <Navbar /> : null}
        </div>
        {isAuthorized ? <HeaderAuth logout={logoutState} /> : <HeaderUnauth />}
      </div>
    </header>
  );
};

const Navbar = () => {
  return (
    <nav className="flex gap-6 items-center flex-wrap text-wrap">
      <Link to="/auctions" className="active:text-secondary">
        <p className="text-md">All Auctions</p>
      </Link>
      <Link to="/auctions/new" className="active:text-secondary">
        <p className="text-md">New Auction</p>
      </Link>
      <Link to="/auctions/my" className="active:text-secondary">
        <p className="text-md">My Auctions</p>
      </Link>
    </nav>
  );
};

const HeaderUnauth = () => {
  return (
    <div className="flex gap-4">
      <Link to="/login">
        <Button size="lg" variant={"outline"}>
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button size="lg" variant={"outline"}>
          Register
        </Button>
      </Link>
    </div>
  );
};

type HeaderAuthProps = {
  logout: () => void;
};

const HeaderAuth: React.FC<HeaderAuthProps> = ({ logout }) => {
  return (
    <Button size="lg" variant={"outline"} onClick={logout}>
      Logout
    </Button>
  );
};

export default Header;
