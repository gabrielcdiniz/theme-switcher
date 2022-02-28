import type { AppProps } from "next/app";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { DefaultLayout } from "@/layouts/Default";
import { globalCSS } from "@/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  globalCSS(); // applying global stylesheets

  return (
    <ThemeProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default MyApp;
