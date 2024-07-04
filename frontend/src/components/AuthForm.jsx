import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFail } from "../features/auth/authSlice";
import { login } from "../api/authAPI"; // Replace with actual API functions

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(username, password);
      dispatch(loginSuccess(token));
      // Redirect or handle successful login
    } catch (error) {
      console.error("Login error:", error);
      dispatch(loginFail(error.message));
      // Handle login error (display error message, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
        Login
      </button>
    </form>
  );
};

export default AuthForm;
