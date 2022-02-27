import { dark } from "@/styles/themes/default/dark/default";
import { light } from "@/styles/themes/default/light/default";
import type { ThemesKeys } from "@/types/theme";

type ThemeState = typeof dark | typeof light;
type ChangeThemeAction = ThemesKeys;

const changeTheme = (action?: ChangeThemeAction): ThemeState => {
  switch (action) {
    case "light":
      return light;
    case "dark":
      return dark;
    default:
      return light;
  }
};

export { changeTheme };
