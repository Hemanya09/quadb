import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage"; // Replace with your actual CartPage component
import ProductDetail from "./components/ProductDetail";
import AddProductPage from "./pages/AddProductPage";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/add-product" element={<AddProductPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center py-4">
          <div className="max-w-7xl mx-auto">
            &copy;{new Date().getFullYear()} Footer
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
