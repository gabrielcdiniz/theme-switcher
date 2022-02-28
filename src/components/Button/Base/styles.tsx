import { css } from "@/styles/themes/default";

const ButtonBaseCSS = css({
  backgroundColor: "$backgroundColor",
  borderColor: "$secondaryColor",
  borderStyle: "solid",
  borderWidth: "$none",

  color: "$accentColor",
  cursor: "pointer",

  outline: "none",

  transition: 'all .2s',

  [`&:hover`]: {
    backgroundColor: "$gray100",
  },

  [`&:active`]: {
    backgroundColor: "$gray200",
  },

  // utils
  br: "$sm",
  px: "$n",
  py: "$q",
  mx: "$q",
  smallBoxShadow: "$gray100",
});

export { ButtonBaseCSS };
