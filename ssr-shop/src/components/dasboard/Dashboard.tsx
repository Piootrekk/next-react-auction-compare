import { Card, CardDescription, CardHeader } from "../ui/card";
import { authCheck } from "@/actions/authCheck";
import Futures from "./Features";
import AccordionInfo from "./AccordionInfo";
import Link from "next/link";

const Dashboard = async () => {
  const { data } = await authCheck();
  if (!data.user) {
    return (
      <div className="flex flex-col justify-center items-center my-12  ">
        <Card className="p-4 flex flex-col gap-2 items-center ">
          <h1 className="text-4xl">Hello Anonymous</h1>
          <p className="text-2xl">Welcom to auctions online</p>
          <CardDescription>
            Please login to see your dashboard. To login click on the login
            button on the top right corner .<br />
            <Link className="flex justify-center pt-4" href="/auctions">
              <span className="text-center text-lg">Show all auctions</span>
            </Link>
          </CardDescription>
        </Card>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center my-12  ">
      <Card className="p-4 flex flex-col gap-2 items-center w-2/3">
        <h1 className="text-4xl">Welcome</h1>
        <p className="text-2xl">{data.user.email}</p>
      </Card>
    </div>
  );
};

export default Dashboard;
