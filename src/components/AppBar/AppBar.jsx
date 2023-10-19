import {
  Container,
  Wrapper,
  Box,
  ButtonOutlined,
  ButtonContained,
} from './AppBar.styled';

export const AppBar = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <ButtonOutlined to="/login">Log In</ButtonOutlined>
          <ButtonContained to="/register">Sign Up</ButtonContained>
        </Box>
      </Container>
    </Wrapper>
  );
};
