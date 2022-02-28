import { ButtonBase } from "@/components/Button/Base";
import { ButtonOutlined } from "@/components/Button/Outlined";
import { useTheme } from "@/contexts/ThemeContext";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { switchTheme } = useTheme();

  return (
    <>
      <h1>hello</h1>
      <ButtonBase onClick={switchTheme}>TEXT</ButtonBase>
      <ButtonOutlined onClick={switchTheme}>TEXT</ButtonOutlined>
    </>
  );
};

export default Home;
