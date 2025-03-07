import React from 'react';
import s from './Intro.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectMode } from '../../redux/theme/selectors';
import { toggleTheme } from '../../redux/theme/slice';

const Intro = () => {
  const dispatch = useDispatch();

  const handleModeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={s.container}>
      {/* <h1 className={s.title}>LitLog</h1> */}
      <button className={s.btn} onClick={handleModeChange}></button>
      {/* <div className={s.block}>
        <h2 className={s.subtitle}>Will help you to</h2>
        <ul className={s.list}>
          <li>Create your goal faster and proceed to read</li>
          <li>Divide process proportionally for each day</li>
          <li>Track your success</li>
        </ul>
      </div>
      <div className={s.block}>
        <h2 className={s.subtitle}>You may also</h2>
        <ul className={s.list}>
          <li>Pose your own independent point of view</li>
          <li>Improve your professional skills according to new knowledge</li>
          <li>Become an interesting interlocutor</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Intro;
