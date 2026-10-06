import type { ToastContentProps } from 'react-toastify';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';
import { Button } from '../Button';
import st from './styles.module.css';

export function Dialog({ closeToast, data}: ToastContentProps<string>) {
  return (
    <>
      <div className={st.container}>
        <p>{data}</p>

        <div className={st.buttonContainer}>
          <Button
            onClick={() => closeToast(true)}
            icon={<ThumbsUpIcon />}
            aria-label='Confirmar ação e fechar'
            title='Confirmar ação e fechar'
          />
          <Button 
            onClick={() => closeToast(false)}
            icon={<ThumbsDownIcon />}
            color='red'
            aria-label='Cancela ação e fechar'
            title='Cancela ação e fechar'
            />
        </div>
      </div>
    
    </>
  )

}