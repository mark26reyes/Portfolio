import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./Home";
import AboutMe from "./Aboutme";
import Work from "./Work";
import Experience from "./Experiece";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </Router>
  );
};

export default App;
