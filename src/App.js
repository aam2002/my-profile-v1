import "./App.css";
import BgCourcer from "./Components/BgCourcer";
import Contact from "./Components/Contact";
import Intro from "./Components/Intro";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
        <BgCourcer />
        <div id="main">
          <Nav />
          <Intro />
          <Skills />
          <Projects/>
          <Contact/>
        </div>
    </div>
  );
}

export default App;
