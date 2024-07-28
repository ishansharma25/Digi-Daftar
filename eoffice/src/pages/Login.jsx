import React from "react";
import { useNavigate } from "react-router-dom";
import COVER_IMAGE from "../assets/1.jpg";

const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disabled: "#D9D9D9",
};

const Login = ({ theme }) => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform your login logic here (e.g., validate credentials)
    // If successful, navigate to the Home page
    navigate("/");
  };

  return (
    <div className={`w-full h-screen flex items-start ${theme}`}>
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Turn Your Ideas into Reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offers from the community
          </p>
        </div>
        <img
          src={COVER_IMAGE}
          className="w-full h-full object-cover"
          alt="Cover"
        />
      </div>
      <div
        className={`w-1/2 h-full flex flex-col p-10 px-14 justify-center ${
          theme === "light" ? "bg-[#f5f5f5]" : "bg-[#060606]"
        }`}
      >
       
        <div className="w-full flex flex-col mb-4">
          <h1
            className={`text-xl font-semibold mb-8 ${
              theme === "light" ? "text-[#060606]" : "text-[#f5f5f5]"
            }`}
          >
            Login
          </h1>
          <p
            className={`text-xl font-semibold mb-8 ${
              theme === "light" ? "text-[#060606]" : "text-[#f5f5f5]"
            }`}
          >
            Welcome back
          </p>
          <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              className={`border p-2 rounded focus:outline-none ${
                theme === "light"
                  ? "border-gray-300 focus:border-blue-500"
                  : "border-gray-700 focus:border-blue-300"
              }`}
            />
            <input
              type="password"
              placeholder="Password"
              className={`border p-2 rounded focus:outline-none ${
                theme === "light"
                  ? "border-gray-300 focus:border-blue-500"
                  : "border-gray-700 focus:border-blue-300"
              }`}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-sm">
            <a
              href="#"
              className={`hover:underline ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
