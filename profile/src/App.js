import { useContext } from "react";
import Landing from "./components/Landing";
import Toggle from "./components/Toggle";
import { ThemeContext } from "../src/context";
import About from "./components/About";
import GlobalStyles from "./Styles/GlobalStyles";
import Footer from "./components/Footer";
import ArticlesCards from "./components/ArticlesCards";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1a1e25" : "#ededed",
        color: darkMode && "#ededed",
      }}
    >
      <GlobalStyles />
      <Toggle />
      <Landing />
      <About />
      <ArticlesCards/>
      <Footer />
    </div>
  );
}

export default App;
