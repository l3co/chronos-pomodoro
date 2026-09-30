import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <Heading>
          Chronos
        </Heading>
      </Container>
      <Container>
        <Heading>
          Menu
        </Heading>
      </Container>
      <Container>FORM</Container>
      <Container>FOOTER</Container>
    </>
  );
}