import AccordionInfo from "@/components/dasboard/AccordionInfo";
import Dashboard from "@/components/dasboard/Dashboard";
import Futures from "@/components/dasboard/Features";
import DashboardSkeleton from "@/components/loading/dashboardSkeleton";
import { Suspense } from "react";

const Home = async () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center">
        <Suspense fallback={<DashboardSkeleton />}>
          <Dashboard />
        </Suspense>
        <div className="flex flex-col items-center">
          <Futures />
          <AccordionInfo />
        </div>
      </div>
    </>
  );
};

export default Home;
