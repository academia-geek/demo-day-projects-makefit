import { Navigate } from "react-router-dom";

const PublicRoutes = ({ isAuth, children }) => {
    return !isAuth
        ? children
        : <Navigate to="/*" />
};

export default PublicRoutes;