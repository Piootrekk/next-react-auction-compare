import { Skeleton } from "@/components/ui/skeleton";

const LoadingNew = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 w-1/3 p-12 my-6 border rounded-lg">
        <Skeleton className="w-full h-12" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-1/3 h-10 self-end" />
      </div>
    </>
  );
};

export default LoadingNew;
