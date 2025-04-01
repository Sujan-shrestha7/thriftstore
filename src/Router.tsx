import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/dashboard/Home";
import Footer from "./footer";
import Login from "./components/dashboard/Login";
import LoginForm from "./components/dashboard/LoginForm";
import StoreHome from "./components/Store/storeHome";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}></Route>
<Route path="/login" element={<LoginForm/>}></Route>
<Route path="/home" element={<Home/>}></Route>
<Route path="/footer" element={<Footer/>}></Route>
<Route path="/storehome" element={<StoreHome/>}></Route>
 </Routes>
</BrowserRouter>
    </div>
  )
}

export default Router     