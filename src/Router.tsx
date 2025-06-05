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
import Cart from "./components/dashboard/cart";
import SellerLoginForm from "./components/Store/SellerLoginForm";
import SellerRegisterForm from "./components/Store/SellerRegisterForm";
import Myorder from "./components/dashboard/Myorder";
import View from "./components/Store/View";

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
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/myorder" element={<Myorder/>}></Route>
          <Route path="/storeproducts" element={<StoreProducts/>}></Route>
          <Route path="/storedashboard" element={<StoreDashboard />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/orderview" element={<View/>}></Route>
          <Route path="/sellerform" element={<SellerLoginForm/>}></Route>
          <Route path="/sellerregisterform" element={<SellerRegisterForm/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
