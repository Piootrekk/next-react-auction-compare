import { Card } from "../ui/card";
import { authCheck } from "@/actions/authCheck";
const Dashboard = async () => {
  const { data } = await authCheck();
  if (!data.user) {
    return null;
  }
  return (
    <div className="flex justify-center items-center my-12">
      <Card className="p-4 flex flex-col gap-2 items-center">
        <h1 className="text-4xl">Welcome</h1>
        <p className="text-2xl">{data.user.email}</p>
      </Card>
    </div>
  );
};

export default Dashboard;
