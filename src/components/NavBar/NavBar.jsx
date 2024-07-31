import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import s from './NavBar.module.css';
import { useSelector } from 'react-redux';

import { selectIsAuthenticated } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';

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
