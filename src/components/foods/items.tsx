import React from "react";
import img from '../images/foods.png';
import remove from '../images/delete.webp';
import edit from '../images/Edit.png'

const Items: React.FC = () => {
const foodswithcategory=[
  {
    "sn": 100203,
    "name": "cheese burst",
    "category": "Veg Pizza",
    "halfprice": "not available",
    "fullprice": 850,
    "img": img
  },
  {
    "sn": 100204,
    "name": "pepperoni",
    "category": "Chicken Pizza",
    "halfprice": 450,
    "fullprice": 850,
    "img": img
  },
  {
    "sn": 100205,
    "name": "bbq chicken",
    "category": "Chicken Pizza",
    "halfprice": 400,
    "fullprice": 800,
    "img": img
  },
  {
    "sn": 100206,
    "name": "margherita",
    "category": "Veg Pizza",
    "halfprice": 350,
    "fullprice": 700,
    "img": img
  },
  {
    "sn": 100207,
    "name": "tandoori paneer",
    "category": "Veg Pizza",
    "halfprice": 380,
    "fullprice": 760,
    "img": img
  }
]



  return (
    <div>
      <ul className="flex flex-wrap gap-[20px] text-center ">
        <li className="w-[150px] h-[45px] text-[18pbg-[]x] font-bold text-[#404040]">
          S.N
        </li>
        <li className="w-[150px] h-[45px]  text-[18px] font-bold text-[#404040]">
          Name
        </li>
        <li className="w-[150px] h-[45px] text-[18px] font-bold text-[#404040]">
          Category
        </li>
        <li className="w-[150px] h-[45px] text-[18px] font-bold text-[#404040]">
          Half Price
        </li>
        <li className="w-[150px] h-[45px] ml-[20px] text-[18px] font-bold text-[#404040]">
          Full Price
        </li>
      </ul>
      {/* Divider below sub-header */}
      <div className="absolute h-[1px] mt-[-5px] ml-[-12px] bg-[#404040] w-[80%]" />      
            {/* Search Bar */}
            <div className="w-full flex pt-[5px] pr-[30px] justify-between">
              <div className="w-full max-w-[200px] md:max-w-[250px]">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="border-2 border-gray-400 bg-[#ECE6F0] h-10 px-5 rounded-md w-[450px]"
                />
              </div>
              <div>
                <button className="bg-[#06542F] h-10 font-bold rounded-md text-[#fff] w-[150px]">
                  Add Categories
                </button>
              </div>
            </div>


            {/* Orders List */}
      {foodswithcategory.map((f, index) => (
        <React.Fragment key={f.sn}>
          <div key={index}
            className="flex text-center items-center gap-[3px] mr-[30px]" >
            <div className="w-[175px] h-[140px] flex items-center justify-center text-[18px] font-bold text-[#666666]">
              {f.sn}
            </div>
            <div className="w-[200px] h-[140px] flex ml-[10px] items-center justify-center text-[18px] font-bold text-[#666666]">
              {f.name}
            </div>
            <div className="w-[220px] h-[140px]  flex items-center justify-center text-[18px] font-bold text-[#666666]">
              {f.category}
            </div>
            <div className="w-[200px] h-[140px]  flex items-center justify-center text-[18px] font-bold text-[#666666]">
              Rs .{f.halfprice} /-
            </div>
            <div className="w-[200px] h-[140px]  flex items-center justify-center text-[18px] font-bold text-[#666666]">
              Rs. {f.fullprice} /-
            </div>
            <div className="w-[145px] h-[120px] flex items-center justify-center text-[18px] font-bold text-[#666666]">
              <img src={f.img} className="w-[140px] h-[100px]" alt="" />
            </div>
            <div className="h-[35px] w-[50px] ml-[30px] cursor-pointer">
              <img src={edit} className="w-[35px] h-[35px] rounded-[50%]" alt="" />
            </div>
            <div className="h-[35px] w-[50px] ml-[15px] cursor-pointer">
              <img src={remove} className="w-[35px] h-[35px] rounded-[50%]" alt="" />
            </div>
          </div>
        </React.Fragment>
      ))}
    
    </div>
  );
};

export default Items;
