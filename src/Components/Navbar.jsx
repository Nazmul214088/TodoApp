import ThemeToggle from "../Contexts/ThemeToggle";
import { FaChartBar, FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="dark:bg-[#131111] flex justify-between items-center shadow-sm p-4  border-b border-[#3333]">
      <ul className="flex gap-6  text-xl font-semibold  justify-center dark:text-white ">
        {navLinks}
      </ul>
      <ul className="flex gap-6  text-lg font-semibold  justify-center items-center dark:text-white ">
        {authLinks}
        <ThemeToggle />
      </ul>
    </nav>
  );
};

export default Navbar;

const navLinks = (
  <>
    <NavItem label="Home" to="/" icon={<FaHome />} />
    <NavItem label="Stats" to="/stats" icon={<FaChartBar />} />
  </>
);
const authLinks = (
  <>
    <NavItem label="Sign Up" to="/signup" icon={<FaUserPlus />} />
    <NavItem label="Sign In" to="/signin" icon={<FaSignInAlt />} />
  </>
);
