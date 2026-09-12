
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';


export const CountDown = () => {
  const taskContext = useContext(TaskContext);
  console.log(taskContext)
  // const { state } = usePomodoroContext();
  
  // return (
  //   <div className={st.container}>{state.formattedSecondsRemaining}</div>
  
};
