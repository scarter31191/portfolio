import About from "./components/About/About";
import Contacts from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="App">
      <h1>Portfolio</h1>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
