import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
<Routes>
<Route path="/" element={<Navbar/>}></Route>
 </Routes>
</BrowserRouter>
    </div>
  )
}

export default Router     