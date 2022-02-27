import type { AppProps } from "next/app";
import { globalCSS } from "@/styles/global";
import { ThemeProvider } from "@/contexts/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  globalCSS(); // applying global stylesheets

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
