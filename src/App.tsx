import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import BreadCrumbs from "./components/BreadCrumbs";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <BreadCrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
