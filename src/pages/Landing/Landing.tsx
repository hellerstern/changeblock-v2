import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../config/routes";
import Header from "../../Layout/Header/Header";
import {
  ImgPlayCircle,
  ImgBack1,
  ImgGraph1,
  ImgGraph2,
  ImgGraph3,
  ImgGraph4,
  ImgEllipse1,

  ImgBack2,
} from "../../assets/images";

import { btn1 } from "../../components/globalStyles/globalStlyles";
import Companies from "../../components/companies/Companies";
import AnsweringMan from "../../components/answeringMan/AnsweringMan";
import WhyCU from "../../components/whycu/WhyCU";
import Ourtool from "../../components/ourtool/Ourtool";
import Support from "../../components/support/Support";

const Landing = () => {
  return (
    <Wrapper>
      <img className='backs' src={ImgBack1} alt='img-back' />
      <img className="ellipse1" src={ImgEllipse1} alt='img-ellipse1'></img>
      <Container>
        <img className="graph img-1" src={ImgGraph1} />
        <img className="graph img-2" src={ImgGraph2} />
        <img className="graph img-3" src={ImgGraph3} />
        <img className="graph img-4" src={ImgGraph4} />
        <Header />
        <Section1>
          <h1>Simplifying complex climate data</h1>
          <p>Discover the power of data driven insights with Changeblock’s InsightX and transform climate data into actionable, intelligent information.</p>
          <Buttons>
            <SignUp to={PUBLIC_ROUTES.signup}>Register for Free</SignUp>
            <WatchDemo to='/'>Watch Demo <img src={ImgPlayCircle}></img></WatchDemo>
          </Buttons>
        </Section1>
      </Container>
      <Section2>
        <Companies></Companies>
      </Section2>

      <Section3>
        <img src={ImgBack2} className='bgImg'></img>
        <Descp>
          <StyledP1>
            Get instant answers with InsightX
          </StyledP1>

          <StyledP2>
            Changeblock’s InsightX uses state of the art deep learning to deliver simple, valuable, actionable information and insights through our all in one dashboard. InsightX makes accessing millions of climate data easy and fast.
          </StyledP2>

          <Link to={PUBLIC_ROUTES.signup}>Register for Free</Link>

        </Descp>
        <AnsweringMan></AnsweringMan>
      </Section3>

      <WhyCU />
      <Ourtool />
      <Support />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  .backs {
    position: absolute;
    z-index: -1;
    top: -300px;
    left: 400px;
    @media screen and (min-width: ${p => p.theme.maxWidth}) {
      left: calc(1000px + (1440px - 100vw) / 2);
    }
    @media screen and (max-width: 768px) {
      left: -150px;
    }
  }
  .ellipse1 {
    top: 0;
    left: 0;
    position: absolute;
  }
  overflow-x: hidden;
`

const Container = styled.div`
  height: 100vh;
  margin: auto;
  max-width: ${p => p.theme.maxWidth};

  position: relative;

  .graph {
    position: absolute;
    z-index: -1;
  }

  .img-1 {
    top: 220px;
    right: 400px;
    @media screen and (max-width: 1320px) {
      display: none;
    }
  }

  .img-2 {
    top: 410px;
    right: 400px;
    @media screen and (max-width: 1320px) {
      display: none;
    }
  }

  .img-3 {
    top: 280px;
    right: 80px;
    @media screen and (max-width: 1050px) {
      display: none;
    }
  }

  .img-4 {
    top: 580px;
    right: 180px;
    @media screen and (max-width: 1050px) {
      display: none;
    }
  }
`
const Section1 = styled.div`
  padding: 50px;
  padding-top: 100px;
  h1 {
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    font-family: 'Inter-Regular';
    color: ${p => p.theme.fontColor1};
    margin-bottom: 40px;

    @media screen and (max-width: 750px) {
      font-size: 40px;
      text-align: center;
      line-height: 57px;
    }
  }

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.fontColor2};
    width: 70%;
    @media screen and (max-width: 750px) {
      width: 100%;
      text-align: center;
    }
    margin-bottom: 70px;
    @media screen and (max-width: 750px) {
      margin-bottom: 30px;
    }
  }

  width: 750px;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
  @media screen and (max-width: 750px) {
    padding: 20px;
    padding-top: 100px;
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;
  @media screen and (max-width: 750px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

const SignUp = styled(Link)`
  ${btn1}
  text-decoration: none;
  width: max-content;
  white-space: nowrap;
`

const WatchDemo = styled(Link)`
  color: ${p => p.theme.fontColor2};
  outline: 0;
  border: 2px solid ${p => p.theme.themeColor};
  padding: 16px 30px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  font-family: 'Inter-Regular';
  border-radius: 10px;
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 10px;
`

const Section2 = styled.div`
  text-align: center;
  max-width: ${p => p.theme.maxWidth};
  margin: auto;
`

const Section3 = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  margin-top: 50px;
  gap: 30px;
  position: relative;
  .bgImg {
    position: absolute;
    bottom: -100px;
    left: -100px;
    z-index: -1;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    a {
      margin: auto;
    }
    gap: 50px;
  }
`

const Descp = styled.div`
  min-width: 300px;
  a {
    ${btn1}
    margin-top: 35px;
  }
`

const StyledP1 = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 600;
  font-size: 64px;
  color: ${p => p.theme.fontColor1};
  @media screen and (max-width: 670px) {
    font-size: 30px;
  }
`

const StyledP2 = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${p => p.theme.fontColor2};
  margin-top: 20px;
`

export default Landing;