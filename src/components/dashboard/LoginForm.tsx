import React, { useState } from "react";
import loginimg from "../images/loginimg.jpg";
import getCookie from "../../csrf_token";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [contact, setContact] = useState<number | string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const csrftoken = getCookie("csrftoken");

    if (contact.length <= 9 || contact.length >= 11) {
      alert("Please enter a valid contact number!");
      return;
    }
    if (password.length <= 8) {
      alert;
    }
    // Basic validation
    if (!contact || !password) {
      alert("Please enter both email and password!");
      return;
    }

    const formData = {
      contact,
      password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/users/login/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken ?? "",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error response:", errorData);
        alert(`Error: ${errorData.message || "Invalid credentials"}`);
        console.log(alert);
        return;
      }

      const data = await response.json();
      console.log("response is", data);
      console.log("name", data.data.fullname);
      localStorage.setItem("name", data.data.fullname);
      localStorage.setItem("id", data.data.id);
      alert("Login successful!");
      navigate("/home");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-[7%] px-[20%]">
      <div className="flex flex-wrap h-[500px] border-2 border-black shadow-xl rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={loginimg}
            className="h-full w-[450px] object-cover opacity-80 p-[15px] rounded-[10px]"
            alt="Login"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-1 flex-col items-center justify-center bg-gray-100 p-6 gap-[30px]">
          <p className="text-[24px] font-bold">Login Page</p>
          <div className="flex flex-col gap-[25px]">
            <label
              htmlFor="contact"
              className="flex flex-col gap-[15px] w-full max-w-[500px]"
            >
              <p className="mb-2 text-lg font-medium">
                Enter Your Contact Number:
              </p>
              <input
                type="text"
                id="contact"
                placeholder="Enter Your Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-[300px] h-[35px] border px-[10px] py-2 rounded-[5px] outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>
            <label
              htmlFor="password"
              className="flex flex-col gap-[15px] w-full max-w-[500px]"
            >
              <p className="mb-2 text-lg font-medium">Enter Your Password:</p>
              <input
                type="password"
                id="password"
                placeholder="Enter Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[300px] h-[35px] border px-[10px] py-2 rounded-[5px] outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>
            <div className="flex justify-between">
              <label htmlFor="" className="flex gap-[5px]">
                <input type="checkbox" />{" "}
                <p className="text-[16px]">Remember me</p>
              </label>
              <p>
                <a href="" className="text-[16px]">
                  {" "}
                  Forgot Password?
                </a>
              </p>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="h-[32px] w-[130px] bg-[#000000] hover:bg-[#fff] text-[#fff] hover:text-[#000000] rounded-[5px] cursor-pointer"
          >
            Login
          </button>
          <p>
            Don't have an Account?
            <a
              href=""
              onClick={() => navigate("/register")}
              className="font-bold"
            >
              {" "}
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
