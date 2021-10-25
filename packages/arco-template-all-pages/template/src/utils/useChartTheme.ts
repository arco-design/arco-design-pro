import { registerTheme, getTheme } from 'bizcharts';
import { useSelector } from 'react-redux';
import { ReducerState } from '../redux';

const defaultDarkTheme = getTheme('dark');

registerTheme('darkTheme', {
  ...defaultDarkTheme,
  background: 'transparent',
});

function useLocale() {
  const theme = useSelector((state: ReducerState) => state.global.theme);

  return theme === 'dark' ? 'darkTheme' : 'default';
}

export default useLocale;
