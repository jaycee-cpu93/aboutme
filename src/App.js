import "./App.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

import "aos/dist/aos.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
