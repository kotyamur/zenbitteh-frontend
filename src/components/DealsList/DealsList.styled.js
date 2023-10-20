import styled from 'styled-components';

export const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Deal = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: calc((100% - 20px) / 2);
  height: 400px;
  border: 1px solid #b29f7e;
  padding: 20px 14px;
  background-image: linear-gradient(
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    );
`;

export const Name = styled.p`
  color: #fff;
  font-family: Merriweather;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  margin-bottom: 5px;
`;

export const DealInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 60px;
`;

export const DealInfoItem = styled.li`
  width: 158px;
  color: #fff;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
`;