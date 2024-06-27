import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./reset.css";
import "./index.css";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Staff from "./pages/Staff";

function App() {
  return (
    <Router>
      <div className="body-container flex-col full-width items-centered">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
