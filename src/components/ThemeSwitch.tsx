import { useTheme } from "@/contexts/ThemeContext";

export const ThemeSwitch = () => {
  const themeCtx = useTheme();
  const handleThemeToggle = () => {
    if (themeCtx) {
      themeCtx?.setTheme(themeCtx?.theme === "dark" ? "light" : "dark");
    }
  };
  return (
    <div
      className="fixed top-0 right-0 left-0 p-3 text-center cursor-pointer"
      onClick={handleThemeToggle}
    >
      {themeCtx?.theme === "dark" && "Mudar para light"}
      {themeCtx?.theme === "light" && "Mudar para dark"}
    </div>
  );
};
