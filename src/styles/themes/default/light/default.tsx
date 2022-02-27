import { createTheme } from "@/styles/themes/default";

import type { ThemesKeys, ThemeProperties } from "@/types/theme";

const light = createTheme<ThemesKeys, ThemeProperties>("light", {
  colors: {
    primaryColor: "#E4CCBF",
    secondaryColor: "#C79273",
    accentColor: "#6D5549",
  },
});

export { light };
