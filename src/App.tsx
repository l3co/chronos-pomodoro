import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading.tsx';

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