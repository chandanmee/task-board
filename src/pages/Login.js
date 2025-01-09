import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api"; // Import the login function from the API file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // To redirect user after successful login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error

    try {
      const response = await login(email, password); // Call the API login function
      // If successful, save token (replace with actual token response)
      localStorage.setItem("token", response.data.token); // Assuming the API returns a token
      // Redirect to task list page after successful login
      navigate("/tasks");
    } catch (error) {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-6 max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
