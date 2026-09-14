import { PlayCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export function MainForm() {
  const handleCreateNewTask = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Deu Certo');
  };
  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <Input
          labelText='task'
          id='input'
          type='text'
          placeholder='Digite aqui'
        />
      </div>
      <div className='formRow'>
        <p>Próximo intervalo é de 25min</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <Button icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
