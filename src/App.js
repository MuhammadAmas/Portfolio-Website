import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Contact from "./components/contact/Contact";
import Navbar from './components/navbar/Navbar';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';


function App() {
  return <>

    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/Contact" element={<Contact />} />
        <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
