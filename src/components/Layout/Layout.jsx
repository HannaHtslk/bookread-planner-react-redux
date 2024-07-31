import { Outlet } from 'react-router-dom';

import s from './Layout.module.css';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Outlet />
      {children}
    </div>
  );
};

export default Layout;
