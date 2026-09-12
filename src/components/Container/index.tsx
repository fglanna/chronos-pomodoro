import type React from 'react';
import st from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className={st.container}>
      <div className={st.content}>{children}</div>
    </div>
  );
};
