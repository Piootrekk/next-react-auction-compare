import Link from "next/link";
import { authCheck } from "@/actions/authCheck";
import { User } from "@supabase/supabase-js";
import { Button } from "../ui/button";
import { logout } from "@/actions/logout";
import PendingSubmit from "../loading/PendingSubmit";

const Header = async () => {
  const { data } = await authCheck();
  return (
    <div className="flex justify-between items-center p-4 px-12 w-full border-b">
      <Link href="/">
        <h1 className="text-4xl font-bold">SSR shop</h1>
      </Link>
      <div>{data.user ? <HeaderAuth /> : <HeaderUnauth />}</div>
    </div>
  );
};

const HeaderAuth: React.FC<{}> = () => {
  return (
    <form action={logout} className="flex">
      <PendingSubmit
        buttonName="Logout"
        size="lg"
        className="h-12"
        variant={"outline"}
      />
    </form>
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

export default Header;
