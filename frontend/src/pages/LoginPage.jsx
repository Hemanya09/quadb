import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <AuthForm formType="login" />
      </div>
    </div>
  );
};

export default LoginPage;
