import React from 'react';
import BasicExample from './Components/Navbar';
import Contact from './Components/Contact';
import Product from './Components/Product';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Category from './Components/Category';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BasicExample title="Navbar" /> 
      <Routes>
        <Route path="/" element={'This is the main page'} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="*" element={'Page not found'} />
      </Routes>
    </>
  );
}
