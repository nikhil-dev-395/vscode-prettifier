import React from "react";
import { Home01Icon } from "hugeicons-react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="bg-[#030712]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/About" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
