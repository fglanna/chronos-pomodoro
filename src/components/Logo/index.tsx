import { TimerIcon } from 'lucide-react';
import st from './styles.module.css';

export const Logo = () => {
  return (
    <div className={st.logo}>
      <a className={st.logoLink} href='#'>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
};
