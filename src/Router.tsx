import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Navbar";
import Details from "./components/Delivery/Details";
import Home from "./components/Home";
import Tabs from "./components/Orders/order1";
import Accounts from "./components/Account & Payments/accountOrders";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
<Routes>
<Route path="/" element={<Sidebar/>}></Route>
<Route path="/home" element={<Home />}></Route>
<Route path="/A&P" element={<Accounts/>}></Route>
<Route path="/order" element={<Tabs />}></Route>
<Route path="/delivery" element={<Details />}></Route>
 </Routes>
</BrowserRouter>
    </div>
  )
}

export default Router     