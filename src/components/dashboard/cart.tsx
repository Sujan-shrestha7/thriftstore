import React, { useState } from "react";
import Navbar from "../homenav";
import Footer from "../../footer";
import image from "../images/books.jpg";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dell Laptop",
      description: "Reliable laptop suitable for students and professionals.",
      price: 1800,
      quantity: 1,
      image: image,
    },
    {
      id: 2,
      name: "SmartBoard",
      description: "Interactive smart board ideal for classrooms.",
      price: 2500,
      quantity: 2,
      image: image,
    },
  ]);

  const updateQuantity = (id: number, amount: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#F0F0FF] min-h-screen">
      <Navbar />

      <div className="pt-[100px] px-[80px]">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex items-start justify-between bg-white p-5 rounded-xl shadow-md"
              >
                {/* Left - Image */}
                <div className="flex gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 rounded-md object-cover"
                  />
                  {/* Product Info */}
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    <p className="mt-2 text-md text-gray-700 font-semibold">
                      Rs. {item.price}
                    </p>
                  </div>
                </div>

                {/* Right - Quantity, Total, Remove */}
                <div className="flex items-center gap-4">
                  {/* Quantity Controls */}
                  {/* <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1 text-xl bg-gray-200 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 text-xl bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div> */}

                  {/* Total Price */}
                  <p className="text-lg font-bold w-[100px] text-right">
                    Rs. {item.price * item.quantity}
                  </p>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-xl"
                    title="Remove"
                  >
                  </button>
                </div>
              </div>
            ))}

            {/* Grand Total */}
            <div className="text-right mt-8">
              <p className="text-2xl font-bold text-gray-800">
                Grand Total: Rs. {grandTotal}
              </p>
              <button className="mt-4 px-6 py-2 bg-[#FC6E4F] text-white rounded-md text-lg hover:bg-[#e45738]">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
