import st from './styles.module.css';
import { RouterLink } from '../RouterLink';

export const Footer = () => {
  return (
    <footer className={st.footer}>
      <RouterLink href='/about-pomodoro/'>
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink href='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚{' '}
      </RouterLink>
    </footer>
  );
};
