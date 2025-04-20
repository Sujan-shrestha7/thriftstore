import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/dashboard/Home";
import Footer from "./footer";
import Login from "./components/dashboard/Login";
import LoginForm from "./components/dashboard/LoginForm";
import Products from "./components/dashboard/Products";
import StoreProducts from "./components/Store/storeProducts";
import StoreDashboard from "./components/Store/StoreDashboard";
import Registerform from "./components/dashboard/Register";
import Order from "./components/Store/Order";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<Registerform />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/storeproducts" element={<StoreProducts/>}></Route>
          <Route path="/storedashboard" element={<StoreDashboard />}></Route>
          <Route path="/order" element={<Order />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
