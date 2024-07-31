import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsAuthenticated);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
