import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Contact from "./components/contact/Contact";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Loader from "./Loader";


// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [showLoader, setShowLoader] = useState(false);
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
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    <Footer />

  </>
}

export default App;
