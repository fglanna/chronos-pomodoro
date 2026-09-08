import st from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={st.footer}>
      <a href=''>Entenda como funciona a técnica pomodoro</a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚{' '}
      </a>
    </footer>
  );
}
