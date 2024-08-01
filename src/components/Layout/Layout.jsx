import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';

import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Outlet />
      {children}
    </>
  );
};

export default Layout;
