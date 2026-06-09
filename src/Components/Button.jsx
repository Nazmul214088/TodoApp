import cn from "../lib/Utility";

const Button = ({ className, type, title, ...props }) => {
  return (
    <button
      className={cn(" cursor-pointer rounded-xl", className)}
      onClick={props.onClick}
      type={type}
    >
      <div className="flex gap-1 items-center">
        {props.icon}
        <span className={cn(props.isOnlyIconShow && "md:block hidden")}>
          {title}
        </span>
      </div>
    </button>
  );
};

export default Button;
