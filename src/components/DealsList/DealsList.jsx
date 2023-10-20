import { Wrapper, Deal } from './DealsList.styled';

export const DealsList = () => {
    return <Wrapper>
        {[1, 2, 3, 4].map(deal => {
          return <Deal key={deal}></Deal>
      })}
  </Wrapper>;
};
