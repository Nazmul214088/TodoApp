import { twMerge } from "tailwind-merge";

const Button = ({ className, title, ...props }) => {
  return (
    <button
    type={props.type}
      className={twMerge(
        "px-6 py-2 text-white cursor-pointer rounded-xl mr-2",
        className,
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
