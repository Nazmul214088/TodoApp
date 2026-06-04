import { NavLink } from "react-router";

const CustomNavLink = ({ linkTitle, to, ...props }) => {
  return (
    <li>
      <NavLink to={to} className="flex items-center gap-2">
        {props.icon}
        <span>{linkTitle}</span>
      </NavLink>
    </li>
  );
};

export default CustomNavLink;
