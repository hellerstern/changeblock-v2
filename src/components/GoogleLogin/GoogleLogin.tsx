import styled from "styled-components";

import { ImgGoogle } from "../../assets/images";

const GoogleLogin = () => {
  return (
    <Wrapper>
      <img src={ImgGoogle} />
      Sign in with Google
    </Wrapper>
  )
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: transparent;
  outline: 0;
  border: 2px solid #D4D5D6;
  border-radius: 8px; 
  padding: 10px;
  width: 100%;

  img {
    width: 33px;
  }

  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${p => p.theme.fontColor2};
`

export default GoogleLogin;