import {
  Container,
  Wrapper,
  Box,
  Heading,
  Text,
  ActionBtn,
} from './Hero.styled';

export const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Heading>The chemical negatively charged</Heading>
          <Text>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </Text>
          <ActionBtn>Get Started</ActionBtn>
        </Box>
      </Container>
    </Wrapper>
  );
};
