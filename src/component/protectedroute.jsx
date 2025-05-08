import { Navigate } from "react-router-dom";
import { Auth } from "./authContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = Auth();

  if (!isLoggedIn) {
    return <Navigate to="/login"/>;
  }

  return children;
}

export default ProtectedRoute;