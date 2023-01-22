import { Toggler, TogglerIcon, TogglerButton } from "../Styles/ToggleStyles";
import Sun from "../assets/img/sun.png";
import Moon from "../assets/img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <Toggler>
      <TogglerIcon src={Sun} alt="sun" />
      <TogglerIcon src={Moon} alt="moon"/>
      <TogglerButton
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></TogglerButton>
    </Toggler>
  );
};

export default Toggle;
