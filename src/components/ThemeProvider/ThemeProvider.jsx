import { useSelector } from 'react-redux';
import { selectMode } from '../../redux/theme/selectors';
import { useEffect } from 'react';

const ThemeProvider = ({ children }) => {
  const mode = useSelector(selectMode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  return <>{children}</>;
};

export default ThemeProvider;
