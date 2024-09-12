import SkeletonLayout from "./layouts/SkeletonLayout";
import { createBrowserRouter } from "react-router-dom";

const routerSkeleton = createBrowserRouter([
  {
    element: <SkeletonLayout />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
    ],
  },
]);

export default routerSkeleton;
