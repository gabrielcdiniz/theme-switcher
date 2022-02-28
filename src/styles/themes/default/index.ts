import { createStitches } from "@stitches/react";
import type { PropertyValue, ScaleValue } from "@stitches/react";

export const {
  theme, // refers the default theme
  config, // refers this configurations
  styled, // used to create styled components
  createTheme, // create theme based on default styles
  css, // create css properties based on default styles
  getCssText, // used to server-side rendering - see https://stitches.dev/docs/api#getcsstext
  globalCss, // create the global CSS, must be used only once
} = createStitches({
  // see https://system-ui.com/theme/
  // see https://stitches.dev/docs/tokens
  // applying in default theme
  theme: {
    // applying in any color
    colors: {
      gray50: "hsl(0, 0%, 95%)",
      gray100: "hsl(0, 0%, 85%)",
      gray200: "hsl(0, 0%, 75%)",
      gray300: "hsl(0, 0%, 65%)",
      gray400: "hsl(0, 0%, 55%)",
      gray500: "hsl(0, 0%, 45%)",
      gray600: "hsl(0, 0%, 35%)",
      gray700: "hsl(0, 0%, 25%)",
      gray800: "hsl(0, 0%, 15%)",
      gray900: "hsl(0, 0%, 10%)",

      backgroundColor: "#f0f0f0",
      textColor: "#4c4c4c",
    },
    // applying in paddings, margins, etc
    space: {
      q: "4px",
      xn: "8px",
      n: "12px",
      xxxs: "16px",
      xxs: "24px",
      xs: "32px",
      sm: "40px",
      md: "48px",
      lg: "56px",
      xl: "64px",
      xxl: "80px",
      xxxl: "120px",
      h: "160px",
      g: "200px",
    },
    // applying in width, height, etc
    sizes: {
      q: "4px",
      xn: "8px",
      n: "12px",
      xxxs: "16px",
      xxs: "24px",
      xs: "32px",
      sm: "40px",
      md: "48px",
      lg: "56px",
      xl: "64px",
      xxl: "80px",
      xxxl: "120px",
      h: "160px",
      g: "200px",
    },
    // applying in fonts sizes
    fontSizes: {
      n: "12px",
      sm: "16px",
      md: "20px",
      lg: "28px",
      xl: "32px",
      display: "64px",
    },
    // applying in fonts
    fonts: {
      system: "system-ui",
    },
    // applying in border-radius
    radii: {
      none: "0",
      sm: "8px",
      md: "16px",
      lg: "24px",
      pill: "500px",
      circ: "50%",
    },
    // applying in border widths
    borderWidths: {
      none: "0",
      hair: "1px",
      thin: "2px",
      thick: "3px",
    },
    shadows: {
      gray50: "hsl(0, 0%, 95%)",
      gray100: "hsl(0, 0%, 85%)",
      gray200: "hsl(0, 0%, 75%)",
      gray300: "hsl(0, 0%, 65%)",
      gray400: "hsl(0, 0%, 55%)",
      gray500: "hsl(0, 0%, 45%)",
      gray600: "hsl(0, 0%, 35%)",
      gray700: "hsl(0, 0%, 25%)",
      gray800: "hsl(0, 0%, 15%)",
      gray900: "hsl(0, 0%, 10%)",
    },
  },
  // applying in any situation
  utils: {
    mx: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    br: (value: ScaleValue<"radii">) => ({
      borderRadius: value,
    }),
    smallBoxShadow: (value: ScaleValue<"colors">) => ({
      boxShadow: `
        2px 2px 1px 1px ${value},
        2px 2px 8px 3px ${value}
      `,
    }),
  },
  // applying in specified break-points
  media: {
    mobile: "(min-width: 420px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1220)",
  },
});
