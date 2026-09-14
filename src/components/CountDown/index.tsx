import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import st from './styles.module.css';


export const CountDown = () => {
  const { state } = useTaskContext();
  

  return <div className={st.container}>{state.formattedSecondsRemaining}</div>;
 
};
