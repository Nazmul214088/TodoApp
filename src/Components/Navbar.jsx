import ThemeToggle from "../Contexts/ThemeToggle";
import { FaChartBar, FaHome } from "react-icons/fa";
import CustomNavLink from "./CustomNavLink";

const Navbar = () => {
  const navLinks = (
    <>
      <CustomNavLink label="Home" to="/" icon={<FaHome />} />
      <CustomNavLink label="Stats" to="/stats" icon={<FaChartBar />} />
    </>
  );
  return (
    <nav className="dark:bg-[#131111] flex justify-between shadow-sm p-4  border-b border-[#3333]">
      <ul className="flex gap-6  text-xl font-semibold  justify-center dark:text-white ">
        {navLinks}
      </ul>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
