import logo from "./images/thrift.png";
import search from "./images/search.png";
import cart from "./images/cart.png";
import profile from "./images/profile.png";
// import StoreHome from "./Store/storeHome";
import { useNavigate } from "react-router-dom";

const HomeNav = () => {
  const navigate = useNavigate();
  let name = localStorage.getItem("name");

  return (
    <div>
      <div className="flex justify-between items-center h-[60px] w-[100%] bg-[#fff] px-[100px]">
        <div onClick={() => navigate("/home")} className="ml-[-2%] flex gap-[10px] items-center justify-center cursor-pointer">
          <img src={logo} className="h-[55px] w-[55px]" alt="" />
          <p className="text-[28px] font-bold">Thrift Store</p>
        </div>
        {/* Search Bar */}
        <div className=" relative w-[380px]">
          <input
            type="text"
            placeholder="Search here..."
            className="border-2 border-gray-400 bg-[#ECE6F0] h-10 px-4 pr-10 rounded-md w-full"
          />
          <button type="submit" className="absolute right-2 top-2">
            <img src={search} className="h-4 w-4" alt="Search Icon" />
          </button>
        </div>

        <div className="flex">
          <button
            onClick={() => navigate("/storedashboard")}
            className="w-[120px] h-[40px] rounded-[5px] font-bold border-none hover:text-[#8C0000]"
          >
            Switch to Store
          </button>
          <button className="ml-[50px] w-[70px] h-[40px] rounded-[5px] font-bold border-none ">
            <img src={cart} className="w-[35px] h-[25px]" alt="" />
          </button>
          <button className="w-[70px] h-[40px] rounded-[5px] font-bold border-none ">
            <img src={profile} className="w-[40px] h-[35px]" alt="" />
            {/* {name} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
