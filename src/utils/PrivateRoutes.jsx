import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  return sessionStorage.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
