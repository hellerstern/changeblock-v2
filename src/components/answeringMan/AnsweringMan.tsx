import styled from "styled-components";

import {
  ImgAnsweringMan,
  ImgSub1,
  ImgSub2
} from "../../assets/images";

const AnsweringMan = () => {
  return (
    <Wrapper>
      <img src={ImgAnsweringMan} className='main'></img>
      <img src={ImgSub1} className='sub1'></img>
      <img src={ImgSub2} className='sub2'></img>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  .main {
    @media screen and (max-width: 670px) {
      width: 100%;
    }
  }
  .sub1 {
    position: absolute;
    bottom: 36px;
    left: -81px;
    @media screen and (max-width: 670px) {
      transform: scale(0.7);
    }
  }

  .sub2 {
    position: absolute;
    top: -50px;
    right: -80px;
    @media screen and (max-width: 670px) {
      transform: scale(0.7);
    }
  }
`

export default AnsweringMan;
