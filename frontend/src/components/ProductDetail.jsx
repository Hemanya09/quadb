import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../features/products/productSlice.js";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.currentProduct);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    // Optionally: Navigate to cart or show feedback
  };

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-4">Error: {error}</p>;
  }

  if (!product) {
    return <p className="text-center mt-4">Product not found.</p>;
  }

  return (
    <div className="product-detail mx-auto max-w-lg border rounded-lg overflow-hidden shadow-lg mt-4">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-2">Price: ${product.price}</p>
        <p className="text-gray-600 mb-4">Description: {product.description}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
