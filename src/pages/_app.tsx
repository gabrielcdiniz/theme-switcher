import type { AppProps } from "next/app";
import { globalCSS } from "@/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  globalCSS(); // applying global stylesheets

  return <Component {...pageProps} />;
}

export default MyApp;
