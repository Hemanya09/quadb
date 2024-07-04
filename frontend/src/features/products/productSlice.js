// productSlice.js

import { createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line no-unused-vars
import { fetchProductById as fetchProductByIdAPI } from "../../api/api"; // Adjust the import path as per your API function

const initialState = {
  products: [],
  loading: false,
  error: null,
  currentProduct: null, // Add currentProduct state if it's needed
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchProductByIdStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductByIdSuccess: (state, action) => {
      state.currentProduct = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductByIdFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Add other reducers as needed (addProduct, updateProduct, deleteProduct, etc.)
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductByIdStart,
  fetchProductByIdSuccess,
  fetchProductByIdFailure,
} = productSlice.actions;

export default productSlice.reducer;

// Asynchronous action creator to fetch products (simulated API call)
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());
    // Example API call, replace with your actual API call
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

// Asynchronous action creator to fetch a product by ID
export const fetchProductById = (productId) => async (dispatch) => {
  try {
    dispatch(fetchProductByIdStart());
    // Example API call, replace with your actual API call
    const response = await fetch(`http://localhost:5000/products/${productId}`);
    const data = await response.json();
    dispatch(fetchProductByIdSuccess(data));
  } catch (error) {
    dispatch(fetchProductByIdFailure(error.message));
  }
};
