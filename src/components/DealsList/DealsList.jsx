import { useSelector } from 'react-redux';
import {
  Wrapper,
  Deal,
  DealInfo,
  DealInfoItem,
  Name,
  DealImg,
} from './DealsList.styled';
import { selectDeals } from 'redux/deals/dealsSelectors';

export const DealsList = () => {
    const deals = useSelector(selectDeals);
    console.log(deals);
    return (
      <Wrapper>
        {deals.map(
          ({ name, cost, daysNumber, sold, tiketPrice, outcome, image }) => {
            return (
              <Deal key={name}>
                <DealImg src={image} alt={name} />
                <Name>{name}</Name>
                <DealInfo>
                  <DealInfoItem>{cost} Dhs</DealInfoItem>
                  <DealInfoItem>Yield {outcome}%</DealInfoItem>
                  <DealInfoItem>Sold {sold}%</DealInfoItem>
                  <DealInfoItem>Tiket - {tiketPrice} Dhs</DealInfoItem>
                  <DealInfoItem>Days left {daysNumber}</DealInfoItem>
                </DealInfo>
              </Deal>
            );
          }
        )}
      </Wrapper>
    );
};
