import { G2 } from 'bizcharts';
import { useSelector } from 'react-redux';

const defaultDarkTheme = G2.getTheme('dark');

G2.registerTheme('darkTheme', {
  ...defaultDarkTheme,
  background: 'transparent',
});

function useLocale() {
  const theme = useSelector((state: any) => state.theme);

  return theme === 'dark' ? 'darkTheme' : 'default';
}

export default useLocale;
