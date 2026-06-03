import { NavLink } from "react-router";
import ThemeToggle from "../Contexts/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="dark:bg-[#131111]">
      <ul className="flex gap-6 p-4 text-xl font-semibold border-b border-[#3333] shadow-sm justify-center dark:text-white ">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/stats"}>Stats</NavLink>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
