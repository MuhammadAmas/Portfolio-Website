import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function BrowserRouter() {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/Contact" element={<Contact />} />
        <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
  </>
}

export default BrowserRouter;