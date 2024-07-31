import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';

import { selectIsAuthenticated } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsAuthenticated);
  const activeClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav className={s.container}>
      <NavLink to="/" className={activeClass}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/books" className={activeClass}>
          Books
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
