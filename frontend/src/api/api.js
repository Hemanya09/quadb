// api.js

const BASE_URL = "http://localhost:5000"; // Replace with your backend API base URL

// Function to fetch products
export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  return response.json();
};

// Function to add a new product
export const addProduct = async (productData) => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  if (!response.ok) {
    throw new Error(`Failed to add product: ${response.statusText}`);
  }
  return response.json();
};

// Add more functions as needed for updating, deleting, etc.
