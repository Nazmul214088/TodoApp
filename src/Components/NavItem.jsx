import { NavLink } from "react-router";

const NavItem = ({ label, to, ...props }) => {
  return (
    <li>
      <NavLink to={to} className="flex items-center gap-2" tooltip="data-tool">
        {props.icon}
        <span className="hidden sm:block">{label}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
