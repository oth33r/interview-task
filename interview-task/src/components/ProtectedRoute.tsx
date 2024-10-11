import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (localStorage.getItem("user")) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
