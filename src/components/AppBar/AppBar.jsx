import { useAuth } from 'hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import {
  Container,
  Wrapper,
  Box,
  ButtonOutlined,
  ButtonContained,
} from './AppBar.styled';

export const AppBar = () => {
  const dispatch = useDispatch();
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
            <ButtonOutlined onClick={() => dispatch(logOut())}>Log Out</ButtonOutlined>
          </Box>
        )}
      </Container>
    </Wrapper>
  );
};
