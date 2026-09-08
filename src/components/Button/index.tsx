import type React from 'react';
import st from './styles.module.css';

type ButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function Button({ icon, color = 'green', ...props }: ButtonProps) {
  return (
    <>
      <button className={`${st.button} ${st[color]}`}{...props}>
        {icon}
      </button>
    </>
  );
}
