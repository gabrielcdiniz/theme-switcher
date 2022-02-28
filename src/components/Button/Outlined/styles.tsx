import { css } from "@/styles/themes/default";

const ButtonOutlinedCSS = css({
  backgroundColor: "$primaryColor",
  borderColor: "$secondaryColor",
  borderWidth: "$thick",
  color: "$accentColor",

  [`&:hover`]: {
    backgroundColor: "$secondaryColor",
    borderColor: "$accentColor",
    color: "$primaryColor",
  },

  [`&:active`]: {
    backgroundColor: "$accentColor",
    borderColor: "$secondaryColor",
    color: "$primaryColor"
  },
});

export { ButtonOutlinedCSS };
