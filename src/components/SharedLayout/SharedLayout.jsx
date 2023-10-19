import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';

import { Box, AppBar, Container, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
 
  return (
    <Box>
      <AppBar>
        <Container>
          <Link to="/login">Log In</Link>
          <Link to="/register">Sign Up</Link>
        </Container>
      </AppBar>
      <Main>
        <Suspense fallback={<div>...loading</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Box>
  );
};
