import styled from "styled-components";
import { Link } from "react-router-dom";
import { btn1 } from "../globalStyles/globalStlyles";
import { PUBLIC_ROUTES } from "../../config/routes";
const Informed = () => {
  return (
    <Wrapper>
      <p className="title">
        Keep up with the latest trends
      </p>
      <p className="desc">
        Enter your email below and be the first to know when we roll out new updates and keep uo with the latest trends.
      </p>

      <div>
        <StyledInput placeholder='Email@example.com' type='email' />
        <Link to={PUBLIC_ROUTES.contactus}>Subscribe</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: auto;
  margin-top: 100px;
  width: 80%;
  background-color: #D7F8E9;
  text-align: center;
  padding: 26px 50px 50px 36px;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 20px;
  }

  .title {
    color: ${p => p.theme.fontColor1};
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
      font-size: 34px;
      line-height: 37px;
      padding: 26px 20px 36px 20px;
    }

    @media screen and (max-width: 500px) {
      font-size: 24px;
      line-height: 27px;
    }
  }

  .desc {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.fontColor2};
    width: 50%;
    margin: auto;
    margin-bottom: 80px;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (max-width: 500px) {
      font-size: 24px;
      line-height: 27px;
      margin-bottom: 30px;
    }
  }

  a {
    ${btn1}
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
      gap: 20px;
    }
  }
`

const StyledInput = styled.input`
  outline: none;
  border: 1px;
  background: #FFFFFF;
  width: 438px;
  border: 2px solid #E7E7E7;
  border-radius: 8px;
  color: ${p => p.theme.fontColor1};
  font-size: 16px;
  font-family: 'Inter-Medium';
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  padding: 16px;
`



export default Informed;