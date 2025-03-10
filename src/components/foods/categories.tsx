import React from "react";
import c_img from "../images/foods.png";
import "../css/cat.css";
import remove from "../images/delete.webp";

const Categories: React.FC = () => {
  const categories = [
    {
      Categories_name: "Pizza",
      img: c_img,
    },
    {
      Categories_name: "Veg Set",
      img: c_img,
    },
    {
      Categories_name: "Non Veg Set",
      img: c_img,
    },
    {
      Categories_name: "Indian Cousines",
      img: c_img,
    },
    {
      Categories_name: "Indian Cousines",
      img: c_img,
    },
    {
      Categories_name: "Indian Cousines",
      img: c_img,
    },
    {
      Categories_name: "Indian Cousines",
      img: c_img,
    },
  ];

  return (
    <div className="">
    {/* Search Bar */}
    <div className="ml-[60%] flex gap-[30px]">
      <div className="w-full max-w-[200px] md:max-w-[250px]">
        <input
          type="text"
          placeholder="Search here..."
          className="border-2 border-gray-400 bg-[#ECE6F0] h-10 px-5 pr-10 rounded-md w-full"
        />
        <button type="submit" className="absolute right-2 top-2"></button>
      </div>
      <div>
        <button className="bg-[#06542F] h-10 font-bold rounded-md text-[#fff] w-[150px]">
          Add Categories
        </button>
      </div>
    </div>

      <div className="mt-[20px] w-full flex flex-wrap gap-4">
        {categories.map((cat, index) => (
          <div>
            <div
              key={index}
              className="relative h-[180px] w-[210px] bg-black rounded-[10px] overflow-hidden"
            >
              {/* Remove Button */}
              <button className="absolute top-2 right-2">
                <img
                  src={remove}
                  className="h-[30px] w-auto rounded-[20px]"
                  alt="Remove"
                />
              </button>

              {/* Main Image */}
              <img
                src=''
                alt="Category Img"
                className="w-[180px] h-[150px] object-cover"
              />
            </div>
            <div>
              <p className="CatName w-[180px] h-[35px] bg-[#FFE6D9] text-[#F17228] text-center ml-[10px] mt-[15px] pt-[5px] rounded-[8px] shadow-lg">
                {cat.Categories_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
