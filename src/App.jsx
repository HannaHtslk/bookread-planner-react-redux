import { useDispatch, useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import PrivateRoute from './routes/PrivateRoute';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';

import PublicRoute from './routes/PublicRoute';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFound from './pages/NotFoundPage/NotFound';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/slice';
import PlanningPage from './pages/PlanningPage/PlanningPage';
import BookPage from './pages/BookPage/BookPage';

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <p>Refresing...</p>
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="books" element={<BookPage />} />
        <Route path="planer" element={<PlanningPage />} />
      </Route>
      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
