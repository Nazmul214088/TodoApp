import ThemeToggle from "../Contexts/ThemeToggle";
import { FaChartBar, FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import CustomNavLink from "./CustomNavLink";

const Navbar = () => {
  const navLinks = (
    <>
      <CustomNavLink label="Home" to="/" icon={<FaHome />} />
      <CustomNavLink label="Stats" to="/stats" icon={<FaChartBar />} />
    </>
  );
  const authLinks = (
    <>
      {" "}
      <CustomNavLink label="Sign Up" to="/signup" icon={<FaUserPlus />} />
      <CustomNavLink label="Sign In" to="/signin" icon={<FaSignInAlt />} />
    </>
  );
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
