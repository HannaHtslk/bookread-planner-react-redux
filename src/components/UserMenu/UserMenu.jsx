import s from './UserMenu.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/slice';

const UserMenu = () => {
  const username = useSelector(selectUser);

  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Welcome, {username}</h2>
      <button onClick={() => dispatch(logoutUser())} className={s.btn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
