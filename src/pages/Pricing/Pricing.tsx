import styled, { css } from "styled-components";

import Header from "../../Layout/Header/Header";
import { ImgEllipse1, ImgPricing1, ImgPricing2, ImgPricing3, ImgPricingCheck, } from "../../assets/images";
import { btn1 } from "../../components/globalStyles/globalStlyles";
import RequestCustomPlan from "../../components/requestCustomPlan/RequestCustomPlan";


interface inter_plans {
  flag: boolean
}

const Pricing = () => {

  const data = [
    {
      recommend: false,
      img: ImgPricing1,
      title: 'Basic Plan',
      pricing: '$1999/mo',
      subplans: [
        'Access to the What-if Analysis Tool',
        'Basic Information Extraction',
        'Basic Text Summarization',
        'Basic Aspect-based Sentiment Analysis',
        'Basic Customer Support',
        'Ideal for individual users and small organizations with basic climate data analysis needs.',
        '(20 API calls a month per feature per user)',
      ],
      btnName: 'Buy Basic Plan'
    },
    {
      recommend: true,
      img: ImgPricing2,
      title: 'Standard Plan',
      pricing: '$2999/mo',
      subplans: [
        'Full Access to the What-if Analysis Tool',
        'Advanced Information Extraction',
        'Advanced Text Summarization',
        'Advanced Aspect-based Sentiment Analysis',
        'Standard Customer Support',
        'Ideal for individual users and small organizations with basic climate dataanalysis needs',
        '(50 API calls a month per feature per user)',
      ],
      btnName: 'Buy Standard Plan'
    },
    {
      recommend: false,
      img: ImgPricing3,
      title: 'Standard Plan',
      pricing: '$2999/mo',
      subplans: [
        'Full Access to the What-if Analysis Tool',
        'Advanced Information Extraction',
        'Advanced Text Summarization',
        'Advanced Aspect-based Sentiment Analysis',
        'Premium Customer Support',
        'Customizable Dashboard and Reports',
        'Ideal for large organizations with complex climate data analysis requirements.',
        '(Unlimited API calls a month per feature per user)',
      ],
      btnName: 'Buy Premium Plan'
    }
  ]

  return (
    <Wrapper>
      <Container>
        <Header themeFlag={0}></Header>
        <img src={ImgEllipse1} className='bgImg'></img>
        <First>
          <p className="title">
            Choose a Plan
          </p>
          <p className="desc">
            We have the best plans to suit your business growth and needs
          </p>
        </First>

        <Plans>
          {
            data.map((item, index) => (
              <Plan key={index} flag={item.recommend}>
                {item.recommend && <p className="recomFlag"> Recommended </p>}
                <img src={item.img}></img>
                <p className='title'>{item.title}</p>
                <p className='price'>{item.pricing}</p>
                <div className="subplans">
                  {
                    item.subplans.map((subItem, subIndex) => (
                      <div key={subIndex}>
                        <img src={ImgPricingCheck}></img>
                        <p>{subItem}</p>
                      </div>
                    ))
                  }
                </div>

                <button>{item.btnName}</button>
              </Plan>
            ))
          }
        </Plans>
        <RequestCustomPlan title="Request A Custom Plan" desc="We can set up plans that are unique to your business type and needs. Simply fill the form below and let's get started."></RequestCustomPlan>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`

const Container = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: auto;
  padding: 50px;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  .bgImg {
    position: absolute;
    top: -500px;
    left: -500px;
    z-index: -1;
  }
  @media screen and (max-width: 600px) {
    overflow: hidden;
  }
`

const First = styled.div`
  text-align: center;
  margin-top: 260px;
  color: ${p => p.theme.fontColor1};
  .title {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    @media screen and (max-width: 500px) {
      font-size: 44px;
      line-height: 50px;
    }
  }

  .desc {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  }
`

const Plans = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 150px;
  gap: 20px;

  @media screen and (max-width: 920px) {
    justify-content: center;
  }
`
const Plan = styled.div<inter_plans>`
  border: 1px solid #D9D9D9;
  border-radius: 8px;
  padding: 27px 31px;
  width: 400px;
  margin-top: 50px;
  font-family: 'Urbanist-Medium';
  position: relative;
  .recomFlag {
    position: absolute;
    left: 0;
    top: -40px;

    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: ${p => p.theme.fontColor2};
  }
  .title {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: ${p => p.theme.fontColor2};
    margin-top: 27px;
    margin-bottom: 31px;
  }

  .price {
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    color: ${p => p.theme.fontColor1};
    margin-bottom: 55px;
  }

  .subplans {
    min-height: 640px;
    div {
      display: flex;
      align-items: center;
      gap: 15px;
      p {
        font-family: 'Inter-Medium';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: ${p => p.theme.fontColor2};
      }
      margin-bottom: 40px;
    }
  }

  button {
    float: right;
    ${p => p.flag ? css`
      ${btn1};
    `: css`
      ${btn1};
      color: ${p => p.theme.themeColor};
      background-color: white;
      border: 1px solid ${p => p.theme.themeColor};
    `}
    /* margin-top: 120px; */
  }
`

export default Pricing;