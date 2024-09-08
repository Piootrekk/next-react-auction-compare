import Link from "next/link";
import { authCheck } from "@/actions/authCheck";
import { Button } from "../ui/button";
import { logout } from "@/actions/logout";
import PendingSubmit from "../loading/PendingSubmit";
import Image from "next/image";
import auction from "../../images/auction.svg";

const Header = async () => {
  const { data } = await authCheck();
  return (
    <header className="bg-secondary">
      <div className="flex justify-between items-center p-4 container mx-auto gap-y-4 flex-wrap">
        <div className="flex items-center gap-2 gap-x-24 flex-wrap">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={auction}
              width={50}
              height={50}
              alt="logo"
              className="sm:block hidden"
            />
            <h1 className="sm:text-4xl text-2xl font-bold">SSR Auctions</h1>
            <br />
            Online
          </Link>
          {data.user && <Navbar />}
        </div>
        {data.user ? <HeaderAuth /> : <HeaderUnauth />}
      </div>
    </header>
  );
};

const HeaderAuth: React.FC<{}> = () => {
  return (
    <>
      <form action={logout} className="flex">
        <PendingSubmit
          buttonName="Logout"
          size="lg"
          className="h-12"
          variant={"outline"}
        />
      </form>
    </>
  );
};

const HeaderUnauth = () => {
  return (
    <div className="flex gap-4">
      <Link href="/login">
        <Button size="lg" variant={"outline"}>
          Login
        </Button>
      </Link>
      <Link href="/register">
        <Button size="lg" variant={"outline"}>
          Register
        </Button>
      </Link>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="flex gap-6 items-center flex-wrap text-wrap">
      <Link href="/auctions" className="active:text-secondary">
        <p className="text-md">All Auctions</p>
      </Link>
      <Link href="/auctions/new" className="active:text-secondary">
        <p className="text-md">New Auction</p>
      </Link>
      <Link href="/auctions/my" className="active:text-secondary">
        <p className="text-md">My Auctions</p>
      </Link>
    </nav>
  );
};

export default Header;
