import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import getCookie from "../../csrf_token";

const SellerRegisterForm: React.FC = () => {
  // State variables for form inputs
  const [full_name, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State for displaying errors or success messages
  // const [message, setMessage] = useState<string | null>(null);
  // // State for message type (e.g., 'error', 'success')
  // const [messageType, setMessageType] = useState<'error' | 'success' | null>(null);
  // // State for loading indicator during API call
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const csrftoken = getCookie("csrftoken");
    // Basic validation
    if (!full_name || !address || !email || !contact || !password) {
      alert("Please fill up all the forms!");
      return;
    }
    if (contact.length <= 9 || contact.length >= 11) {
      alert("Please enter a valid contact number!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      console.log("Valid email");
    } else {
      alert("invalid Email !!");
    }
    const formData = {
      full_name,
      address,
      email,
      contact,
      password,
    };
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/sellers/sellers/register/",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken ?? "",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error response:", errorData);
        alert(errorData.contact[0]);
        return;
      }

      await response.json();
      alert("Registration successful!");
      navigate("/sellerform");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Seller Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="register-fullname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="register-fullname"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="register-address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="register-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your business or home address"
              required
            />
          </div>

          <div>
            <label
              htmlFor="register-contact"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="register-contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="e.g., 98XXXXXXXX"
              required
            />
          </div>

          <div>
            <label
              htmlFor="register-email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="register-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="register-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="register-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Create a strong password"
              required
              minLength={6}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/sellerform"); // Assuming '/sellerform' is your login route
            }}
            className="font-medium text-green-600 hover:text-green-500"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SellerRegisterForm;
