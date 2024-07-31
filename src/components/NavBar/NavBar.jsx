import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import s from './NavBar.module.css';
import { useSelector } from 'react-redux';

import { selectIsAuthenticated } from '../../redux/auth/selectors';

const NavBar = () => {
  const isLoggedIn = useSelector(selectIsAuthenticated);
  return (
    <header className={s.container}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default NavBar;
