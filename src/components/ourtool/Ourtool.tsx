import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

import { ImgOurtool1, ImgOurtool2, ImgOurtool3, ImgOurtool4 } from "../../assets/images";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Ourtool = () => {
  SwiperCore.use([Autoplay]);
  const data = [
    {
      img: ImgOurtool1,
      title: 'Project Developers',
      desp: 'InsightX helps project developers in the climate space identify and mitigate risks through advanced analysis and interpretation of complex climate data. By utilizing InsightX tools,you can successfully plan and execute your project.'
    },
    {
      img: ImgOurtool2,
      title: 'Insurance Brokers',
      desp: 'InsightX helps insurance brokers determine premiums by analyzing complex climate data through what-if analysis and sentiment analysis to accurately assess project risk and success likelihood. Make better decisions with InsightX'
    },
    {
      img: ImgOurtool3,
      title: 'Forestry Investors',
      desp: 'InsightX helps businesses in the climate space make the right decisions based on accurate analysis of large, complex climate data. Our platform offers what-if analysis, information extraction, text summarisation, and sentiment analysis for quick and easy interpretation'
    },
    {
      img: ImgOurtool4,
      title: 'Plastic Offsetting Investors',
      desp: 'InsightX empowers plastic offsetting investors by providing data-driven analysis of project success likelihood and offering actionable insights to optimize investment decisions in the climate space.'
    },
  ]

  return (
    <Wrapper>
      <StyledP>
        Join other professionals using our tool
      </StyledP>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.img} />
              <Desc>
                <p className="title">{item.title}</p>
                <p className="desc">{item.desp}</p>
              </Desc>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 400px;
  .swiper {
    margin-left: 100px;
    @media screen and (max-width: 1300px) {
      margin: 0 100px;
    }
    @media screen and (max-width: 1024px) {
      margin: 0 50px;
    }
    @media screen and (max-width: 768px) {
      margin: 0 20px;
    }
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80%;
    @media screen and (max-width: 1300px) {
      width: 100%;
    }
    background: rgba(247, 245, 245, 0.99);
    border-radius: 8px;
    padding: 56px 48px;
    gap: 30px;
    text-align: left;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      padding: 30px;
      text-align: center;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const StyledP = styled.p`
  text-align: center;
  color: ${p => p.theme.fontColor1};
  font-weight: 600;
  font-size: 64px;
  line-height: 77px;
  font-family: 'Inter-Medium';
  margin-bottom: 72px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
    line-height: 40px;
  }
`

const Desc = styled.div`  
  .title {
    font-family: 'Inter-Medium';
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: ${p => p.theme.fontColor2};
    margin-bottom: 65px;
    @media screen and (max-width: 500px) {
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 20px;
    }
  }

  .desc {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.fontColor2};
    @media screen and (max-width: 500px) {
      font-size: 15px;
      line-height: 16px;
    }
  }
`

export default Ourtool;
