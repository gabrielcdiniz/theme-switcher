import type { AppProps } from "next/app";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { globalCSS } from "@/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  globalCSS(); // applying global stylesheets

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
