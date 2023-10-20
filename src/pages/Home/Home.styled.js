import styled from 'styled-components';
import BgImage from '../../images/mainBg.jpg'

export const Wrapper = styled.div`
  width: 100%;
  /* height: calc(100vh - 80px); */
  /* background-image: url(${BgImage}); */
  background-image: linear-gradient(
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(${BgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #172234;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Merriweather;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px; /* 125% */
`;

export const Text = styled.p`
  width: 822px;
  margin-bottom: 40px;
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.48px;
`;

export const ActionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 8px;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  font-family: Merriweather;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px; /* 170% */
`;

export const Title = styled.h2`
  color: #b29f7e;
  font-family: Merriweather;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  margin-bottom: 20px;
`;

