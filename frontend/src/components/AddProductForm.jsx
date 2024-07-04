import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/products/productSlice.js";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name,
      price: parseFloat(price),
      description,
    };
    dispatch(addProduct(productData));
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-4 p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg px-3 py-1 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700">
          Price:
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border rounded-lg px-3 py-1 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-lg px-3 py-1 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        disabled={loading}>
        {loading ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
};

export default AddProductForm;
