import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import st from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    return () => {
      console.log('Look, this component will be updated');
    };
  }, [theme]);

  return (
    <nav className={st.menu}>
      <a
        className={st.menuLink}
        href='#'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>
      <a
        className={st.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={st.menuLink}
        href='#'
        aria-label='Ir para configurações'
        title='Ir para configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={st.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
};
