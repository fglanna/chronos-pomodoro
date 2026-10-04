import { TimerIcon } from 'lucide-react';
import st from './styles.module.css';
import { RouterLink } from '../RouterLink';

export const Logo = () => {
  return (
    <div className={st.logo}>
      <RouterLink className={st.logoLink} href='/'>
        <TimerIcon />
        <span>Chronos</span>
      </RouterLink>
    </div>
  );
};
