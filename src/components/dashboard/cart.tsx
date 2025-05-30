import React, { useEffect, useState } from "react";
import Navbar from "../homenav";
import Footer from "../../footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getCookie from "../../csrf_token";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image?: string;
  category: string;
  usedtime : string;
  sellerid: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const userid = localStorage.getItem("id");
  const navigate  =  useNavigate();

  const removeItem = async (id: number): Promise<void> => {
    try {
      await axios.delete(`http://127.0.0.1:8000/carts/carts/${id}/`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const fetchCarts = async (): Promise<void> => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/carts/carts/?userid=${userid}`
      );
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  const grandTotal = cartItems.reduce((total, item) => total + item.price, 0);
  
const handleAddToCart = async (item: CartItem) => {
    const csrftoken = getCookie("csrftoken");
    const fullImageUrl = `http://127.0.0.1:8000/${item.image}`;

    const formData = {
      // sellerid: item.sellerid,
      cartid: item.id,
      sellerid :item.sellerid,
      userid : userid
      // userid: userId,
    };
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/orders/orders/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken ?? "",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.contact?.[0] || "Failed to add to cart");
        return;
      }

      alert("Product added to cart!");
      navigate("/products");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-[#F0F0FF] min-h-screen">
      <Navbar />
      <div className="pt-[100px] px-[80px]">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between bg-white p-5 rounded-xl shadow-md"
              >
                <div className="flex gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                    <p className="mt-2 text-md text-gray-700 font-semibold">
                      Rs. {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-[60px]">
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-bold w-[100px] text-right">
                      Rs. {item.price}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 text-xl"
                      title="Remove"
                    >
                      🗑️
                    </button>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }} 
                    title="Order now"
                    className="text-[18px] text-[#fff] bg-[#FC6E4F] h-[30px] border-[1px] rounded-[5px] ml-[40px] w-[100px]">
                    Order
                  </button>
                </div>
              </div>
            ))}

            {/* <div className="text-right mt-8 ">
              <p className="text-2xl font-bold text-gray-800">
                Grand Total: Rs. {grandTotal}
              </p>
              <button className="mt-4 px-6 py-2 bg-[#FC6E4F] text-white rounded-md text-lg hover:bg-[#e45738]">
                Checkout
              </button>
            </div> */}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
