import {HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from "lucide-react"
import st from './styles.module.css';

export const Menu = () => {
  return (
    <nav className={st.menu}>
      <a className={st.menuLink} href='#'>
        <HouseIcon />        
      </a>
      <a className={st.menuLink} href='#'>
        <HistoryIcon />        
      </a>
      <a className={st.menuLink} href='#'>
        <SettingsIcon />        
      </a>
      <a className={st.menuLink} href='#'>
        <SunIcon />        
      </a>
    </nav>
  );
};
