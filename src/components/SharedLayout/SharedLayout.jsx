import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Main } from './SharedLayout.styled';
import { AppBar } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
 
  return (
    <>
      <AppBar />
      <Main>
        <Suspense fallback={<div>...loading</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
