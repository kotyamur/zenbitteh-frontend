import { LoginForm } from 'components/LoginForm/LoginForm';
import { Wrapper, Container, Box } from './Login.styled';

export default function Login() {
  return (
    <Wrapper>
      <Container>
        <Box>
          <LoginForm />
        </Box>
      </Container>
    </Wrapper>
  );
}
