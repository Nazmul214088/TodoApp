import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-6 p-4 text-xl font-semibold border-b border-[#3333] shadow-sm justify-center ">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/stats"}>Stats</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
