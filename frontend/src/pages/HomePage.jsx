import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {" "}
      {/* Centered and padded container */}
      {/* <h2 className="text-3xl font-bold text-center mb-8">
        Welcome to Our E-Commerce Store
      </h2>{" "} */}
      {/* Larger heading */}
      <ProductList />
    </div>
  );
};

export default HomePage;
