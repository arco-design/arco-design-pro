import { useContext } from 'react';
import { GlobalContext } from '../context';

function useLocale() {
  const { locale } = useContext(GlobalContext);

  return locale;
}

export default useLocale;
