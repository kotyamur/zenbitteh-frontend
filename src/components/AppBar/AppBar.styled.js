import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: #172234;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const ButtonOutlined = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  padding: 11px;
  background-color: transparent;
  border: 1px solid #b29f7e;
  color: #b29f7e;
  border-radius: 5px;
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.1;
  }
`;

export const ButtonContained = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  padding: 11px;
  background-color: #b29f7e;
  border: 1px solid #b29f7e;
  color: #fff;
  border-radius: 5px;
  font-family: 'Merriweather', serif;
  font-style: normal;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.1;
  }
`;
