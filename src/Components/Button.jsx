import cn from "../lib/Utility";

const Button = ({ className, type, title, ...props }) => {
  return (
    <button
      className={cn(" cursor-pointer rounded-xl", className)}
      onClick={props.onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
