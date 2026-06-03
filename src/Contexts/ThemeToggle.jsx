import { CiLight } from "react-icons/ci";
import { useTheme } from "./ThemeContext";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <CiLight /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeToggle;
