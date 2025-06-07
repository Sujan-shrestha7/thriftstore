import logo from "./images/thrift.png";
import search from "./images/search.png";
import cart from "./images/cart.png";
import profile from "./images/profile.png";
// import StoreHome from "./Store/storeHome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomeNav = () => {
  const [profilemenu, setProfilemenu] = useState<boolean>(false);

  const navigate = useNavigate();
  let name = localStorage.getItem("name");

  const tooggleprofilemenu = () => {
    setProfilemenu(!profilemenu);
  };

  const handleLogout = () => {
    // Remove all localStorage items
    localStorage.clear();

    // Redirect to home page
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-between items-center h-[60px] w-[100%] bg-[#fff] px-[100px]">
        <div
          onClick={() => navigate("/home")}
          className="ml-[-2%] flex gap-[10px] items-center justify-center cursor-pointer"
        >
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
            onClick={() => navigate("/sellerform")}
            className="w-[120px] h-[40px] rounded-[5px] font-bold border-none hover:text-[#8C0000]"
          >
            Switch to Store
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="ml-[50px] w-[70px] h-[40px] rounded-[5px] font-bold border-none "
          >
            <img src={cart} className="w-[35px] h-[25px]" alt="" />
          </button>
          <div>
            <button
              onClick={tooggleprofilemenu}
              className="w-[70px] h-[40px] rounded-[5px] font-bold border-none "
            >
              <img src={profile} className="w-[40px] h-[35px]" alt="" />
              {/* {name} */}
            </button>
            {profilemenu && (
              // <div className="fixed inset-0 flex bg-black bg-opacity-50">
              <div className="absolute items-center justify-center right-4 h-[250px] p-[20px] w-[180px] bg-[#444444] rounded-[5px]">
                <p className="text-[18px] text-[#fff]">{name}</p>
                {/* <button onClick={()=>navigate('/myorder')} className="hover:bg-[#312E2E] text-[#fff] h-[35px] w-[120px] rounded-[5px] cursor-pointer">
                  My orders
                </button> */}
                <button
                  onClick={handleLogout}
                  className="hover:bg-[#312E2E]  text-[#fff] h-[35px] w-[120px] rounded-[5px] cursor-pointer"
                >
                  Logout
                </button>
              </div>
              // </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
