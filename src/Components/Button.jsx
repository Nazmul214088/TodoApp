import cn from "../lib/Utility";

const Button = ({ className, type, title, ...props }) => {
  return (
    <button
      type={props.type}
      className={cn(" cursor-pointer rounded-xl", className)}
      {...props}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
