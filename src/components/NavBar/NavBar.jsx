import s from './NavBar.module.css';

import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';

const NavBar = () => {
  const activeClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header className={s.container}>
      <Link className={s.logo} to="/">
        BR
      </Link>
      <nav>
        <NavLink to="/planer" className={activeClass}>
          Planer
        </NavLink>

        <NavLink to="/books" className={activeClass}>
          Books
        </NavLink>
      </nav>
      <UserMenu />
    </header>
  );
};

export default NavBar;
