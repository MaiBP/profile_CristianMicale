import { useContext } from "react";
import Landing from "./components/Landing";
import Toggle from "./components/Toggle";
import { ThemeContext } from "../src/context";
import About from "./components/About";
import Entreviews from "./components/Entreviews";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#ededed",
        color: darkMode && "#ededed",
      }}
    >
      <Toggle />
      <Landing />
      <About />
      <Entreviews/>
    </div>
  );
}

export default App;
