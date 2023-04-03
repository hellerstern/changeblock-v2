import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  ImgComp1,
  ImgComp2,
  ImgComp3,
  ImgComp4,
  ImgComp5,
  ImgComp6,

  ImgBorder
} from '../../assets/images';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface inter_swiper {
  backImg: string
}

const Companies = () => {
  return (
    <Wrapper>
      <p className="title">Join over 32 companies growing with InsightX</p>
      <Container backImg={ImgBorder}>
        <CompanyList>
          <img src={ImgComp1}></img>
          <img src={ImgComp2}></img>
          <img src={ImgComp3}></img>
          <img src={ImgComp4}></img>
          <img src={ImgComp5}></img>
          <img src={ImgComp6}></img>
        </CompanyList>
        <StyledSwiper
          slidesPerView={6}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1300: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <StyledSwiperSlide> <img src={ImgComp1}></img> </StyledSwiperSlide>
          <StyledSwiperSlide> <img src={ImgComp2}></img> </StyledSwiperSlide>
          <StyledSwiperSlide> <img src={ImgComp3}></img> </StyledSwiperSlide>
          <StyledSwiperSlide> <img src={ImgComp4}></img> </StyledSwiperSlide>
          <StyledSwiperSlide> <img src={ImgComp5}></img> </StyledSwiperSlide>
          <StyledSwiperSlide> <img src={ImgComp6}></img> </StyledSwiperSlide>
        </StyledSwiper>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 200px;
  .title {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: ${p => p.theme.fontColor2};
  }
`

const Container = styled.div<inter_swiper>`
  background-image: url(${p => p.backImg});
  margin-top: 50px;
  height: 162px;
`

const StyledSwiper = styled(Swiper)`
  margin-top: 50px;
  padding: 0 30px;
  height: 162px;
  display: none;

  @media screen and (max-width: 1300px) {
    display: block;
  }
`

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CompanyList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`

export default Companies;