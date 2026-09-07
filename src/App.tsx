import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/globalStyles.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
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
           
          </div>
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>

      {/*
      <Container>
        <Footer />
      </Container>*/}
    </>
  );
}
