import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../features/products/productSlice.js";
import { addToCart } from "../features/cart/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.error("Error fetching products:", error);
      // Handle error (e.g., display error message)
    }
  }, [error]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // Optional: Show confirmation or update UI indicating item was added to cart
  };

  if (loading) {
    return <p className="text-center my-4">Loading...</p>;
  }

  if (!products || products.length === 0) {
    return <p className="text-center my-4">No products available.</p>;
  }

  return (
    <div className="product-list">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product.id} className="bg-white rounded-lg shadow-md">
            <Link to={`/products/${product.id}`} className="block p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                Add to Cart
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
