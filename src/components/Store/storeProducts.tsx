import React, { useState } from "react";
import StoreHome from "./storeHome";
import bookImg from "../images/books.jpg";

// Product Interface
interface Product {
  id: number;
  product_name: string;
  category_name: string;
  price: string;
  description: string;
  used_time: string;
  img?: string;
}

const StoreProducts: React.FC = () => {
  // States
  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      product_name: "Harry Potter",
      category_name: "Books",
      price: "500",
      description: "Fantasy Novel",
      used_time: "2 years",
      img: bookImg,
    },
    {
      id: 2,
      product_name: "Smart Watch",
      category_name: "Electronics",
      price: "2000",
      description: "Used smart watch with charger",
      used_time: "6 months",
      img: bookImg,
    },
  ]);

  // Form Fields
  const [productName, setProductName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [usedTime, setUsedTime] = useState("");
  const [productImage, setProductImage] = useState<string | null>(null);

  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
    setIsEditMode(false);
    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setProductName("");
    setCategoryName("");
    setPrice("");
    setDescription("");
    setUsedTime("");
    setProductImage(null);
    setEditId(null);
  };

  // Delete product
  const deleteProduct = (id: number) => {
    const updated = products.filter((product) => product.id !== id);
    setProducts(updated);
  };

  // Start editing a product
  const handleEdit = (product: Product) => {
    setShowForm(true);
    setIsEditMode(true);
    setEditId(product.id);
    setProductName(product.product_name);
    setCategoryName(product.category_name);
    setPrice(product.price);
    setDescription(product.description);
    setUsedTime(product.used_time);
    setProductImage(product.img || null);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!productName || !categoryName || !price || !description || !usedTime || !productImage) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const newProduct: Product = {
      id: isEditMode && editId ? editId : products.length + 1,
      product_name: productName,
      category_name: categoryName,
      price,
      description,
      used_time: usedTime,
      img: productImage,
    };

    if (isEditMode && editId !== null) {
      setProducts((prev) =>
        prev.map((prod) => (prod.id === editId ? newProduct : prod))
      );
    } else {
      setProducts((prev) => [...prev, newProduct]);
    }

    resetForm();
    setShowForm(false);
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
                placeholder="Search products..."
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

          {/* Product Cards */}
          <div className="mt-[20px] w-full flex flex-wrap gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative h-[340px] w-[230px] bg-black rounded-[10px] overflow-hidden p-2"
              >
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="absolute top-2 right-2 text-white bg-red-600 rounded-full w-7 h-7 flex items-center justify-center"
                >
                  ×
                </button>

                <img
                  src={product.img}
                  alt={product.product_name}
                  className="w-full h-[120px] object-cover rounded-md"
                />

                <div className="mt-2 text-white text-sm space-y-1">
                  <p><strong>Name:</strong> {product.product_name}</p>
                  <p><strong>Category:</strong> {product.category_name}</p>
                  <p><strong>Price:</strong> Rs. {product.price}</p>
                  <p><strong>Description:</strong> {product.description}</p>
                  <p><strong>Used Time:</strong> {product.used_time}</p>
                </div>

                <button
                  onClick={() => handleEdit(product)}
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md text-sm w-full"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>

          {/* Add/Edit Product Form */}
          {showForm && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div className="bg-[#ED935E] w-[500px] p-[40px] rounded-md shadow-lg">
                <h2 className="text-white text-xl font-bold text-center mb-4">
                  {isEditMode ? "Edit Product" : "Add New Product"}
                </h2>
                <form
                  className="flex flex-col gap-y-[15px]"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Product Name"
                    className="p-2 rounded-md"
                  />
                  <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Category Name"
                    className="p-2 rounded-md"
                  />
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price (Rs.)"
                    className="p-2 rounded-md"
                  />
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="p-2 rounded-md"
                  />
                  <input
                    type="text"
                    value={usedTime}
                    onChange={(e) => setUsedTime(e.target.value)}
                    placeholder="Used Time (e.g., 2 months)"
                    className="p-2 rounded-md"
                  />

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
                            setProductImage(reader.result as string);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="mt-1 text-white"
                    />
                    {productImage && (
                      <img
                        src={productImage}
                        alt="Preview"
                        className="mt-2 w-full h-[100px] object-cover rounded-md"
                      />
                    )}
                  </div>

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
                      {isEditMode ? "Update" : "Add"}
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
