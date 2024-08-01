import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useId } from 'react';
import { NavLink } from 'react-router-dom';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { loginUser } from '../../redux/auth/operations';

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email!').required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters!')
      .max(20, 'Up to 20 characters!')
      .required('Required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, actions) => {
    dispatch(loginUser(values))
      .unwrap()
      .then(() => actions.resetForm())
      .catch(() => toast.error('Credentials are not valid'));
  };
  return (
    <div>
      <div className={s.container}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form className={s.form}>
            <div className={s.wrapper}>
              <label className={s.lab} htmlFor={emailFieldId}>
                Email
              </label>
              <Field
                className={s.input}
                type="email"
                name="email"
                id={emailFieldId}
              />
              <ErrorMessage className={s.error} name="email" component="span" />
            </div>
            <div className={s.wrapper}>
              <label className={s.lab} htmlFor={passwordFieldId}>
                Password
              </label>
              <Field
                className={s.input}
                type="text"
                name="password"
                id={passwordFieldId}
              />
              <ErrorMessage
                className={s.error}
                name="password"
                component="span"
              />
            </div>
            <div className={s.login}>
              <p className={s.lab}>Do not have an account? </p>
              <NavLink className={s.link} to="/register">
                Register
              </NavLink>
            </div>

            <button className={s.btn} type="submit">
              Log in
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
