import React from 'react';
import BasicExample from './Components/Navbar';
import Contact from './Components/Contact';
import Product from './Components/Product';
import SignUp from './Components/SignUp';
import Category from './Components/Category';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';

export default function App() {
  return (
    <>
      <BasicExample props="Navbar" /> 
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer props="Footer" />
    </>
  );
}
