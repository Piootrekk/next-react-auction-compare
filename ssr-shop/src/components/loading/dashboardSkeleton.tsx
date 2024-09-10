import { Skeleton } from "../ui/skeleton";

const DashboardSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center my-12">
      <div className="border w-3/5 p-4 rounded-lg ">
        <Skeleton className="w-full h-8 mb-4" />
        <Skeleton className="w-full h-6 mb-4" />
        <Skeleton className="w-full h-8" />
      </div>
    </div>
  );
};

export default DashboardSkeleton;
