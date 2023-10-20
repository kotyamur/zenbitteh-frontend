import styled from 'styled-components';

export const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Deal = styled.li`
  width: calc(100%/2 - 20px);
  height: 300px;
  border: 1px solid #b29f7e;
`;