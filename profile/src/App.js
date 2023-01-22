import { useContext } from "react";
import Landing from "./components/Landing";
import Toggle from "./components/Toggle";
import { ThemeContext } from "../src/context";
import About from "./components/About";
import EntreviewsSlide from "./components/EntreviewsSlide";
import GlobalStyles from "./Styles/GlobalStyles";
import Footer from "./components/Footer";
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
      <GlobalStyles/>
      <Toggle />
      <Landing />
      <About />
      <EntreviewsSlide/>
      <Footer/>
    </div>
  );
}

export default App;
