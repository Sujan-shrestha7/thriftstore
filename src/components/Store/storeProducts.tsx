import React, { useState, useEffect } from "react";
import StoreHome from "./storeHome";
import bookImg from "../images/books.jpg"; // Make sure this path is correct

// Category Interface
interface Category {
  id: number;
  cat_name: string;
  img?: string;
}

const StoreProducts: React.FC = () => {
  // States
  const [showForm, setShowForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryImage, setNewCategoryImage] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, cat_name: "Books", img: bookImg },
    { id: 2, cat_name: "Electronics", img: bookImg },
    { id: 3, cat_name: "Clothes", img: bookImg },
    { id: 4, cat_name: "Shoes", img: bookImg },
  ]);

  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Delete category
  const deleteCategory = (id: number) => {
    const updated = categories.filter((cat) => cat.id !== id);
    setCategories(updated);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newCategoryName || !newCategoryImage) {
      alert("Please enter name and select an image.");
      return;
    }

    const newCategory: Category = {
      id: categories.length + 1,
      cat_name: newCategoryName,
      img: newCategoryImage,
    };

    setCategories((prev) => [...prev, newCategory]);
    setNewCategoryName("");
    setNewCategoryImage(null);
    toggleForm();
  };

  return (
    <div>
      <StoreHome />
      <div className="ml-[275px]">
        <p className="font-bold text-[22px]">Products</p>

        <div className="p-4">
          {/* Search Bar & Add Button */}
          <div className="flex justify-end gap-[20px]">
            <div className="w-full max-w-[250px]">
              <input
                type="text"
                placeholder="Search categories..."
                className="border-2 border-gray-400 bg-[#ECE6F0] h-10 px-5 pr-10 rounded-md w-full"
              />
            </div>
            <button
              onClick={toggleForm}
              className="bg-[#06542F] h-10 font-bold rounded-md text-white w-[150px]"
            >
              Add Product
            </button>
          </div>

          {/* Divider */}
          <div className="absolute h-[1px] mt-[5px] ml-[-12px] bg-[#404040] w-[80%]" />

          {/* Category Cards */}
          <div className="mt-[20px] w-full flex flex-wrap gap-4">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="relative h-[180px] w-[210px] bg-black rounded-[10px] overflow-hidden"
              >
                {/* Remove Button */}
                <button
                  onClick={() => deleteCategory(cat.id)}
                  className="absolute top-2 right-2 text-white bg-red-600 rounded-full w-7 h-7 flex items-center justify-center"
                >
                  ×
                </button>

                {/* Category Image */}
                <img
                  src={cat.img}
                  alt={cat.cat_name}
                  className="w-[180px] h-[150px] object-cover mx-auto"
                />

                {/* Category Name */}
                <p className="w-full h-[35px] bg-[#FFC9AB] text-[#F17228] font-bold text-center pt-[5px] rounded-[8px] shadow-lg">
                  {cat.cat_name}
                </p>
              </div>
            ))}
          </div>

          {/* Add Category Form */}
          {showForm && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div className="bg-[#ED935E] w-[500px] p-[40px] rounded-md shadow-lg">
                <h2 className="text-white text-xl font-bold text-center mb-4">
                  Add New Products
                </h2>
                <form
                  className="flex flex-col gap-y-[15px]"
                  onSubmit={handleSubmit}
                >
                  {/* Category Name Input */}
                  <div>
                    <label className="text-white">Category Name:</label>
                    <input
                      type="text"
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      className="w-full p-2 mt-1 rounded-md text-black"
                      placeholder="Enter category name"
                    />
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="text-white">Upload Image:</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setNewCategoryImage(reader.result as string);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="mt-1 text-white"
                    />
                    {newCategoryImage && (
                      <img
                        src={newCategoryImage}
                        alt="Preview"
                        className="mt-2 w-full h-[100px] object-cover rounded-md"
                      />
                    )}
                  </div>

                  {/* Form Buttons */}
                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      onClick={toggleForm}
                      className="bg-red-500 w-[120px] px-4 py-2 rounded-md text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-500 px-4 py-2 w-[120px] rounded-md text-white"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreProducts;
