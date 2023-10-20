import { useAuth } from 'hooks/useAuth';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Wrapper,
  Box,
  ButtonOutlined,
  ButtonContained,
} from './AppBar.styled';

export const AppBar = () => {
    const location = useLocation();
    const isLoginRegisterPage =
      location.pathname === '/login' || location.pathname === '/register';
    const { isLoggedIn } = useAuth();
  return (
    <Wrapper>
      <Container>
        {!isLoggedIn && !isLoginRegisterPage && (
          <Box>
            <ButtonOutlined to="/login">Log In</ButtonOutlined>
            <ButtonContained to="/register">Sign Up</ButtonContained>
          </Box>
        )}
        {isLoggedIn && !isLoginRegisterPage && (
          <Box>
            <ButtonOutlined>Log Out</ButtonOutlined>
          </Box>
        )}
      </Container>
    </Wrapper>
  );
};
