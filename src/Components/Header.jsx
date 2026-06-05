import cn from "../lib/Utility";

const Header = ({ title, className }) => {
  return (
    <h2
      className={cn(
        "text-2xl md:text-5xl my-4 py-2 font-bold dark:text-white ",
        className,
      )}
    >
      {title}
    </h2>
  );
};

export default Header;
