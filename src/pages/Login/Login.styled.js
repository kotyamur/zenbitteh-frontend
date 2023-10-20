import styled from 'styled-components';
import LoginBgImage from '../../images/loginBg.jpg';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url(${LoginBgImage});
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  background-color: #fff;
`;

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: calc(100vh - 80px);
`;
