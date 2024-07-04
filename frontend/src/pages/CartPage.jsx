import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
      <Cart />
    </div>
  );
};

export default CartPage;
