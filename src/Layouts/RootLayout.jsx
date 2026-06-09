import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div className="dark:bg-[#2f3542] min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
