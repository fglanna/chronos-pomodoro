/*import { createContext, useContext, useState } from 'react';
import type React from 'react';
import type { TaskStateModel } from '../models/TaskStateModel';

type PomodoroContextType = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

const PomodoroContext = createContext<PomodoroContextType | undefined>(undefined);

type PomodoroProviderProps = {
  children: React.ReactNode;
};

export const PomodoroProvider = ({ children }: PomodoroProviderProps) => {
  const [state, setState] = useState<TaskStateModel>(initialState);

  return (
    <PomodoroContext.Provider value={{ state, setState }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export const usePomodoroContext = () => {
  const context = useContext(PomodoroContext);
  if (context === undefined) {
    throw new Error('usePomodoroContext must be used within a PomodoroProvider');
  }
  return context;
};
*/