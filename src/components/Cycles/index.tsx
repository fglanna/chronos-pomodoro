import st from './styles.module.css';

export function Cycles() {
  return (
    <div className={st.cycles}>
      <span>Ciclos:</span>

      <div className={st.cycleDots}>
        <span className={`${st.cycleDot} ${st.workTime}`}></span>
        <span className={`${st.cycleDot} ${st.shortBreakTime}`}></span>
        <span className={`${st.cycleDot} ${st.workTime}`}></span>
        <span className={`${st.cycleDot} ${st.shortBreakTime}`}></span>
        <span className={`${st.cycleDot} ${st.workTime}`}></span>
        <span className={`${st.cycleDot} ${st.shortBreakTime}`}></span>
        <span className={`${st.cycleDot} ${st.workTime}`}></span>
        <span className={`${st.cycleDot} ${st.longBreakTime}`}></span>
      </div>
    </div>
  );

}