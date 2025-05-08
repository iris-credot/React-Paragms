import { useNavigate } from "react-router-dom";
import { Auth } from "./authContext";

function Login() {
  const navigate = useNavigate();
  const { login } = Auth();

  const handleLogin = () => {
    login();
    navigate("/dashboard",{ replace: true });
  };

  return (
    <div className="text-center mt-20">
    <h2 className="text-3xl font-bold mb-4">Login Page</h2>
    <button 
      onClick={handleLogin}
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
    >
      Login
    </button>
  </div>
  );
}
export default Login;