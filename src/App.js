import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import BackgroundSlider from "./components/backgroundSlider";
import Tester from "./pages/tester";
import Platonics from "./components/platonics";
import Polygon from "./components/polygon";

const App = () => {
  return (
    <>
      {/* <BackgroundSlider> */}
        <Routes>
          <Route path="/polygon" element={<Polygon />} /> 
          <Route path="/platonics" element={<Platonics />} /> 
          <Route path="/tester" element={<Tester />} /> 
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/work" element={<Work />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      {/* </BackgroundSlider> */}
    </>
  )
}

export default App;
