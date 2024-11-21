import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Use URL parameter to determine initial view
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get("mode");
    setIsSignUp(mode === "signup");
  }, [location.search]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={() => navigate("/")} // Navigate to the home page
        className="absolute top-4 left-4 flex items-center text-primary hover:text-secondary transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 13l-7-7-7 7"
          ></path>
        </svg>
        <span className="ml-2">Go Back</span>
      </button>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4 flex justify-between">
          <button
            onClick={() => setIsSignUp(true)}
            className={`px-4 py-2 rounded-md ${
              isSignUp ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsSignUp(false)}
            className={`px-4 py-2 rounded-md ${
              !isSignUp ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
        </div>

        {isSignUp ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Your Password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Your Password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
