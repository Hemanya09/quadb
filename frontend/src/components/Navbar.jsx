import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/" className="text-white text-xl font-bold">
            Your Logo
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link
            to="/login"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Signup
          </Link>
          <Link
            to="/cart"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
