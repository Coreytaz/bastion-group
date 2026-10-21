import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import BreadCrumbs from "./components/BreadCrumbs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Products = lazy(() => import("./pages/Products"));
const TypeProduct = lazy(() => import("./pages/TypeProduct"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <>
      <Header />
      <BreadCrumbs />
      <Suspense fallback={<p className="container empty-state" role="status">Загрузка…</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/typeProduct" element={<TypeProduct />} />
          <Route path="/product" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
