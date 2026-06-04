import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../Hooks/useTheme";
import Button from "../Components/Button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className="shadow-[inset_0_0_5px_#67e6dc] text-2xl font-bold transition duration-200 dark:bg-[#b6e4ff] py-2 px-6"
      title={
        theme === "light" ? (
          <CiLight className="text-[#e58e26]" />
        ) : (
          <MdDarkMode />
        )
      }
    />
  );
};

export default ThemeToggle;
