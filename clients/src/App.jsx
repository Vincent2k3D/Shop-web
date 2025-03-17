import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./pages/Contact";
import Hotline from "./pages/Hotline";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotline" element={<Hotline />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
