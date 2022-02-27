import { createStitches } from "@stitches/react";

export const {
  theme, // refers the default theme
  config, // refers this configurations
  styled, // used to create styled components
  createTheme, // create theme based on default styles
  css, // create css properties based on default styles
  getCssText,
  globalCss, // create the global CSS, must be used only once
} = createStitches({
  // see https://system-ui.com/theme/
  // see https://stitches.dev/docs/tokens
  theme: {
    // applying in default theme
    colors: {
      // applying in any color
      backgroundColor: "#4c4c4c",
      textColor: "#f0f0f0",
    },
    space: {
      // applying in paddings, margins, etc
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
    sizes: {
      // applying in width, height, etc
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
    fontSizes: {
      // applying in fonts sizes
      n: "12px",
      sm: "16px",
      md: "20px",
      lg: "28px",
      xl: "32px",
      display: "64px",
    },
    fonts: {
      // applying in fonts
      system: "system-ui",
    },
    radii: {
      // applying in border-radius
      none: "0",
      sm: "8px",
      md: "16px",
      lg: "24px",
      pill: "500px",
      circ: "50%",
    },
    borderWidths: {
      // applying in border widths
      none: "0",
      hair: "1px",
      thin: "2px",
      thick: "3px",
    },
  },
  utils: {
    // applying in any situation
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    br: (value: string) => ({
      borderRadius: value,
    }),
  },
  media: {
    // applying in specified break-points
    mobile: "(min-width: 420px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1220)",
  },
});
