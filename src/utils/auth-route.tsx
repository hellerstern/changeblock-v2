import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { PUBLIC_ROUTES } from "../config/routes";

// ====================
// Route with authentication
// ====================
export const AuthRoute = () => {

  return Object.keys(JSON.parse(localStorage.getItem('profile') || '{}')).length === 0 ? (
    <Navigate to={PUBLIC_ROUTES.login} replace />
  ) : (
    <Outlet />
  );
};
