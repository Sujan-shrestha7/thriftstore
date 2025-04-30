import React, { useState, useEffect } from "react";
import StoreHome from "./storeHome";
import getCookie from "../../csrf_token";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  usedtime: string;
  img?: string;
}

const StoreProducts: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const [productName, setProductName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [usedTime, setUsedTime] = useState("");
  const [productImage, setProductImage] = useState<string | null>(null);
  const userid = localStorage.getItem('id');

  // Fetch existing products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/products/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  const SubmitProducts = async (e: React.FormEvent) => {
    e.preventDefault();
    const csrftoken = getCookie("csrftoken");

    if (!productName || !categoryName || !usedTime || !userid) {
      alert("Please fill all required fields!");
      return;
    }

    const formData = new FormData();
      formData.append("name", productName);
      formData.append("category",categoryName);
      formData.append("price", price);
      formData.append("usedtime", usedTime);
      formData.append("description", description);
      formData.append("userid", userid || "");

      try {
      const response = await fetch("http://127.0.0.1:8000/products/products/create/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken ?? "",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Error response:", data);
        alert(`Error: ${JSON.stringify(data, null, 2)}`);
        return;
      }

      alert("Product added successfully!");
      setProducts((prev) => [...prev, data]);
      resetForm();
      setShowForm(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setIsEditMode(false);
    resetForm();
  };

  const resetForm = () => {
    setProductName("");
    setCategoryName("");
    setPrice("");
    setDescription("");
    setUsedTime("");
    setProductImage(null);
    setEditId(null);
  };

  return (
    <div>
      <StoreHome />
      <div className="ml-[275px]">
        <p className="font-bold text-[22px]">Products</p>
        <div className="p-4">
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

          <div className="absolute h-[1px] mt-[5px] ml-[-12px] bg-[#404040] w-[80%]" />

          <div className="mt-[20px] w-full flex flex-wrap gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative h-[340px] w-[230px] bg-black rounded-[10px] overflow-hidden p-2"
              >
                <img
                  src={product.img || "https://via.placeholder.com/230x120"}
                  alt={product.name}
                  className="w-full h-[120px] object-cover rounded-md"
                />

                <div className="mt-2 text-white text-sm space-y-1">
                  <p><strong>Name:</strong> {product.name}</p>
                  <p><strong>Category:</strong> {product.category}</p>
                  <p><strong>Price:</strong> Rs. {product.price}</p>
                  <p><strong>Description:</strong> {product.description}</p>
                  <p><strong>Used Time:</strong> {product.usedtime}</p>
                </div>
              </div>
            ))}
          </div>

          {showForm && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div className="bg-[#ED935E] w-[500px] p-[40px] rounded-md shadow-lg">
                <h2 className="text-white text-xl font-bold text-center mb-4">
                  {isEditMode ? "Edit Product" : "Add New Product"}
                </h2>
                <form
                  className="flex flex-col gap-y-[15px]"
                  onSubmit={SubmitProducts}
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
                    <label className="text-white">Upload Image (optional):</label>
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