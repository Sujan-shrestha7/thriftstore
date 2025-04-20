import React, { useState } from "react";
import loginimg from "../images/loginimg.jpg";
import getCookie from "../../csrf_token";
import { useNavigate } from "react-router-dom";

const Registerform = () => {
  const [fullname, setFullname] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [contact, setContact] = useState<number | string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const csrftoken = getCookie("csrftoken");
    // Basic validation
    if (!contact || !password || !fullname || !address) {
      alert("Please fill up all the forms!");
      return;
    }

    const formData = {
      fullname,
      address,
      contact,
      password,
    };
    try {
      const response = await fetch("http://127.0.0.1:8000/users/register/", {
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
        alert(errorData.contact[0])
        // alert(`Error: ${errorData.message}`);
        // console.log(alert);
        return;
      }

      await response.json();
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-[5%] px-[20%]">
      <div className="flex flex-wrap h-[600px] border-2 border-black shadow-xl rounded-lg overflow-hidden">
        {/* Form Section */}
        <div className="flex flex-1 flex-col items-center justify-center bg-gray-100 p-6 gap-[10px]">
          <p className="text-[24px] font-bold">Login Page</p>
          <div className="flex flex-col gap-[15px]">
            <label
              htmlFor="fullname"
              className="flex flex-col gap-[10px] w-full max-w-[500px]"
            >
              <p className="mb-2 text-lg font-medium">Enter Your Full Name:</p>
              <input
                type="text"
                id="fullname"
                placeholder="Enter Your Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-[300px] h-[35px] border px-[10px] py-2 rounded-[5px] outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>
            <label
              htmlFor="address"
              className="flex flex-col gap-[10px] w-full max-w-[500px]"
            >
              <p className="mb-2 text-lg font-medium">Enter Your Address:</p>
              <input
                type="text"
                id="address"
                placeholder="Enter Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-[300px] h-[35px] border px-[10px] py-2 rounded-[5px] outline-none focus:ring-2 focus:ring-blue-400"
              />
            </label>
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
              className="flex flex-col gap-[10px] w-full max-w-[500px]"
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
          </div>
          <button
            onClick={handleSubmit}
            className="h-[32px] w-[130px] bg-[#000000] hover:bg-[#fff] text-[#fff] hover:text-[#000000] rounded-[5px] cursor-pointer"
          >
            Register
          </button>
          <p>Already have an Account?<a href="" onClick={() => navigate("/login")} className="font-bold"> Sign In</a></p>
        </div>
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={loginimg}
            className="h-full w-[450px] object-cover rounded-[10px] p-[15px]"
            alt="Register"
          />
        </div>
      </div>
    </div>
  );
};

export default Registerform;
