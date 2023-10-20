import { DealsList } from 'components/DealsList/DealsList';
import {
  Container,
  
} from './Deals.styled';

export default function Deals() {
  return (
    <Container>
      <p>Open deals</p>
      <DealsList />
    </Container>
  );
}
