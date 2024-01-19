import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = useSelector((state) => {
    console.log("STATE -----> ", state);
    return state.isAuthenticated;
  });

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
