import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Contact from "./components/contact/Contact";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Loader from "./Loader";
import Research from "./components/research papers/Research";


function App() {
  const [showLoader, setShowLoader] = useState(true);
  setTimeout(() => {
    setShowLoader(false);
  }, 2500)


  return <>

    <div className="loader">
      {
        showLoader && <Loader />
      }
    </div>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    <Footer />

  </>
}

export default App;
