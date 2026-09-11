import { PlayCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export const MainForm = () => {
  return (
  <form className='form' action=''>
    <div className='formRow'>
      <Input
        labelText='task'
        id='input'
        type='text'
        placeholder='Digite aqui'
      />
    </div>
    <div className='formRow'>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className='formRow'>
      <Cycles />
    </div>
    <div className='formRow'>
      <Button icon={<PlayCircleIcon />} />
    </div>
  </form>
  );
};
