import { DealsList } from 'components/DealsList/DealsList';
import { Container, Title } from './Deals.styled';

export const Deals = () => {
  return (
    <Container>
      <Title>Open Deals</Title>
      <DealsList />
    </Container>
  );
};