import { G2 } from 'bizcharts';
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '@/context';

const defaultDarkTheme = G2.getTheme('dark');
G2.registerTheme('darkTheme', {
  ...defaultDarkTheme,
  background: 'transparent',
  labels: {
    style: {
      fill: 'rgba(255,255,255,0.7)',
    },
  },
  components: {
    annotation: {
      text: {
        style: {
          fill: 'rgba(255,255,255,0.7)',
        },
      },
    },
    axis: {
      common: {
        label: {
          style: {
            fill: 'rgba(255,255,255,0.7)',
          },
        },
      },
    },
    legend: {
      common: {
        itemName: {
          style: {
            fill: 'rgba(255,255,255,0.7)',
          },
        },
      },
    },
  },
});

function useBizTheme() {
  const { theme } = useContext(GlobalContext);
  const themeName = theme === 'dark' ? 'darkTheme' : 'light';
  const [themeObj, setThemeObj] = useState(G2.getTheme(themeName));

  useEffect(() => {
    const themeName = theme === 'dark' ? 'darkTheme' : 'light';
    const newTheme = G2.getTheme(themeName);
    console.log(themeName, newTheme);
    setThemeObj(newTheme);
  }, [theme]);

  return themeObj;
}

export default useBizTheme;
