import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Work from "./Work";
import Experience from "./Experiece";
import Contact from "./Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
