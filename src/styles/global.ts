import { globalCss } from "@/styles/themes/default";

const globalCSS = globalCss({
  "@import": [
    "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",
    "https://fonts.googleapis.com/css2?family=Fredoka&display=swap",
  ],
  "*": {
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
    fontFamily: "'Varela Round', sans-serif",
  },
  "html,body": {
    minHeight: "100vh",
  },
});

export { globalCSS };
