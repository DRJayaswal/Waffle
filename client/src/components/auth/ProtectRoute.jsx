import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ user, redirect }) => {
  return user ? <Outlet /> : <Navigate to={redirect || "/login"} />;
};

export default ProtectRoute;