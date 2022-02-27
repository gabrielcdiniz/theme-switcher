import { createContext, useState } from "react";

import { changeTheme } from "@/helpers/theme/changeTheme";
import type { Theme } from "@/types/theme";

const ThemeContext = createContext({} as Theme);

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(changeTheme()); // initial value "light"
  const [isDarkMode, setIsDarkMode] = useState(false);

  // TODO: add multiple themes logic
  const switchTheme = () => {
    const newTheme = changeTheme(isDarkMode ? "light" : "dark");
    setTheme(newTheme);
    setIsDarkMode((previous) => !previous);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
