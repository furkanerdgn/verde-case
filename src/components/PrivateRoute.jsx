import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
    const userId = useSelector((state) => state.auth.userId);
    const location = useLocation();

    if (!userId) {
        return (
          <Navigate
            replace={true}
            state={{ return_url: location.pathname }}
            to="/login"
          />
        );
      }
      return children;
}