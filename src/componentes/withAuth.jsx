
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {

    const AuthRoute = () => {
        const isAuth = !!localStorage.getItem("MYPWA/usuario");
        if (isAuth){
            return <Component/>;
        } else {
            return <Navigate to="/login"/>;
        }
    }

    return AuthRoute;
}

export default withAuth;