import { registerTheme, getTheme } from 'bizcharts';
import { useSelector } from 'react-redux';

const defaultDarkTheme = getTheme('dark');

registerTheme('darkTheme', {
  ...defaultDarkTheme,
  background: 'transparent',
});

function useLocale() {
  const theme = useSelector((state: any) => state.theme);

  return theme === 'dark' ? 'darkTheme' : 'default';
}

export default useLocale;
