import { Field, Form, Formik } from 'formik';
import s from './RegisterForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

const RegisterForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Must be a valid email!').required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters!')
      .max(20, 'Up to 20 characters!')
      .required('Required'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values))
      .unwrap()
      .then(() => actions.resetForm())
      .catch(() => toast.error('Such user already exists!'));
  };
  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div className={s.wrapper}>
            <label className={s.lab} htmlFor={nameFieldId}>
              Username
            </label>
            <Field
              className={s.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
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
            <p className={s.lab}>Already have an account? </p>
            <NavLink className={s.link} to="/login">
              Log in
            </NavLink>
          </div>
          <button className={s.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
