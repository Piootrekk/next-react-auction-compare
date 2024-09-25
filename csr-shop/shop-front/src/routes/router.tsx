import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultPageLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Auctions from "./pages/Auctions";
import New from "./pages/New";
import AuctionId from "./pages/AuctionId";
import MyAuctions from "./pages/MyAuctions";
import MyLayout from "./layouts/MyLayout";
import MyBids from "./pages/MyBids";
import ImageTest from "./pages/ImageTest";
import StaticRender from "./pages/StaticRender";
import DynamicRender from "./pages/DynamicRender";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/auctions", element: <Auctions /> },
      { path: "/auctions/new", element: <New /> },
      { path: "/auctions/:id", element: <AuctionId /> },
      {
        path: "/auctions/my",
        element: <MyLayout />,
        children: [
          { path: "/auctions/my", element: <MyAuctions /> },
          { path: "/auctions/my/bids-history", element: <MyBids /> },
        ],
      },
      { path: "/test/image/:id", element: <ImageTest /> },
      { path: "/test/static-render/:amount", element: <StaticRender /> },
      { path: "/test/dynamic-render", element: <DynamicRender /> },
    ],
  },
]);

export default router;
