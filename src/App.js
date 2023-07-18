import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navigation } from "./layouts/Navigation";
import { Producs } from "./pages/producs/producs";
import { Contact } from "./pages/contact/contact";
import { Footer } from "./layouts/Footer";






export const App = () => {
  return (
    <>
      <Footer />
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/producs" element={<Producs />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </>
  );
};
