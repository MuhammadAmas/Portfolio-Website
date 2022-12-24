import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Contact from "./components/contact/Contact";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BrowserRouter from "./BrowserRouter";


// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';


function App() {
  return <>
    <BrowserRouter/>
    {/* <Footer /> */}
  </>
}

export default App;
