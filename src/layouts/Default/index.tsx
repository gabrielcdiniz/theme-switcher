import { useTheme } from "@/contexts/ThemeContext";
import { ReactNode } from "react";

type DefaultLayoutProps = { children: ReactNode };

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { theme } = useTheme();

  return <main className={`${theme} layout--default`}>{children}</main>;
};

export { DefaultLayout };
