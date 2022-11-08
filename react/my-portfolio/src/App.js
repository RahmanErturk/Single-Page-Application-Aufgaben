import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./views/Home";
import About from "./views/About";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Error from "./views/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <footer>Footer</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
