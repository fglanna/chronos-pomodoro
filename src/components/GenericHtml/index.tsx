import st from './styles.module.css';
import type React from 'react';

type GenericHtmlProps = {
  children: React.ReactNode;
}

export function GenericHtml({children}: GenericHtmlProps) {
  return <div className={st.genericHtml}>{children}
    
  </div>

}