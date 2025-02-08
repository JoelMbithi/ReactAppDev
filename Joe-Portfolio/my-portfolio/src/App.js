import React from "react";
import {Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contacts from "./routes/Contacts";

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
  
  );
}

export default App;
