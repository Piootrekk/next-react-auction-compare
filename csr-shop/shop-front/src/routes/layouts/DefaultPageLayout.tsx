import Header from "@/components/page-components/Header";

import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <div className="min-h-screen mx-auto">
        <Header />
        <div className="container mx-auto my-12">
          <Outlet />
        </div>
      </div>
      <footer className="p-8 text-center bg-secondary">
        <p className="text-md">&copy; 2024. All rights reserved.</p>
      </footer>
    </>
  );
};

export default DefaultLayout;
