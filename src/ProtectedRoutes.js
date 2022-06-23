import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./context/UserProvider";

const ProtectedRoutes = () => {
    const { isAuthenticated } = useContext(userContext);
    console.log(isAuthenticated)
    const location = useLocation();
    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/" replace state={{ from: location }} />
    );
};

export default ProtectedRoutes;