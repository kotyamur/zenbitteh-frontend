import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.form`
  width: 350px;
  height: 354px;
  flex-shrink: 0;
`;

export const Title = styled.p`
  color: #172234;
  font-family: Merriweather;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px; /* 121.429% */
`;

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 20px;
  color: #000;
  font-family: Merriweather;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
`;

export const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 20px 12px 20px;
  border-radius: 5px;
  border: 2px solid #e0e0e0;
  background: #e0e0e0;
`;

export const StyledQuestText = styled.p`
  margin-top: 10px;
  text-align: end;
  color: #b29f7e;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

export const StyledBtn = styled.button`
  height: 44px;
  width: 100%;
  padding: 11px 0px;
  margin-top: 30px;
  border-radius: 5px;
  background: #b29f7e;
  color: #fff;
  text-align: center;
  font-family: Merriweather;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
`;

export const StyledQuestion = styled.p`
  margin-top: 10px;
  color: #172234;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 157.143% */
`;

export const StyledLink = styled(Link)`
  margin-top: 10px;
  color: #b29f7e;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

export const ErrrorText = styled.p`
  position: absolute;
  right: 10px;
  color: red;
  font-size: 12px;
`;