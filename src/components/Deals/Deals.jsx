import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeals } from 'redux/deals/dealsOperations';

import { DealsList } from 'components/DealsList/DealsList';
import { Container, Title } from './Deals.styled';
import { selectIsLoading } from 'redux/deals/dealsSelectors';


export const Deals = () => {
  const dispatch = useDispatch();
  const isDealsLoading = useSelector(selectIsLoading)

  useEffect(() => {
      dispatch(fetchDeals());
  }, [ dispatch]);
  return (
    <Container>
      <Title>Open Deals</Title>
      <DealsList />
      {isDealsLoading && <p>Loading...</p>}
    </Container>
  );
};
