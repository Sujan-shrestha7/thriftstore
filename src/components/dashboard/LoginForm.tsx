import React,{useState} from "react";
import { useNavigate} from "react-router-dom";
import getCookie from "../../csrf_token";

const LoginForm = () => {
  const [contact, setContact] = useState<number | string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const csrftoken = getCookie("csrftoken");
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
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
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
        console.log(alert)
        return;
      }

      await response.json();
      alert("Login successful!");
      navigate("/home");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-[400px] p-8 bg-white shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Contact</label>
            <input
              type="email"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your contact"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
