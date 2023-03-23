import styled from "styled-components";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../config/routes";
import { ImgSupport1, ImgSupport2, ImgSupport3 } from "../../assets/images";
import { btn1 } from "../globalStyles/globalStlyles";

const Support = () => {
  return (
    <Wrapper>
      <p className="title">
        24/7 Expert support
      </p>
      <p className="desc">
        Access customer support in over 70 countries and multiple languages available at any time that you need help! With dedicated support, you can be confident that you can acquire and expertise you need to make the most of the latform and achieve your goals.
      </p>

      <Link to={PUBLIC_ROUTES.contactus}>Contact Support</Link>

      <img src={ImgSupport1} className='img1' />
      <img src={ImgSupport2} className='img2' />
      <img src={ImgSupport3} className='img3' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  max-width: ${p => p.theme.maxWidth};
  padding: 50px;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
  margin-top: 300px;
  @media screen and (max-width: 1085px) {
    text-align: center;
  }
  .title {
    color: ${p => p.theme.fontColor1};
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    margin-bottom: 30px;
    @media screen and (max-width: 473px) {
      font-size: 35px;
      line-height: 37px;
    }
  }

  .desc {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.fontColor2};
    width: 531px;
    margin-bottom: 53px;
    @media screen and (max-width: 1085px) {
      width: auto;
      text-align: center;
    }
  }

  a {
    ${btn1}
    @media screen and (max-width: 1085px) {
      margin: auto;
    }
  }

  img {
    position: absolute;
  }

  .img1 {
    top: -100px;
    right: 400px;

    @media screen and (max-width: 1350px) {
      display: none;
    }
  }

  .img2 {
    top: -120px;
    right: 110px;
    @media screen and (max-width: 1085px) {
      display: none;
    }
  }

  .img3 {
    top: 296px;
    right: 105px;
    @media screen and (max-width: 1085px) {
      display: none;
    }
  }
`

export default Support;