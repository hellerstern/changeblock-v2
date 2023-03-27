import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  ImgLoginBack,
  ImgLogo,
} from "../../assets/images";

import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox
} from 'react-icons/md';

import { PUBLIC_ROUTES } from "../../config/routes";
import { btn1, input1 } from "../../components/globalStyles/globalStlyles";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

interface inter_container {
  bgImg: string,
}

const SignUp = () => {

  const [confirmFlg, setConfirmFlg] = useState(false);

  return (
    <Wrapper>
      <Container bgImg={ImgLoginBack}>
        <img src={ImgLoginBack} className='login-back' />

        <LogonForm>

          <div className="logo">
            <img src={ImgLogo}></img>
            <p>
              ChangeBlock
            </p>
          </div>

          <div className="labels">
            <p className="title">Welcome Back!</p>
            <p className="desc">
              Continue exploring ChangeBlock InsightX!
            </p>
          </div>

          <div className="main">
            <input placeholder="Full name"></input>

            <input placeholder="Email"></input>

            <div>
              <input placeholder="Password"></input>
              <Label>
                *At least 8 characters
              </Label>
            </div>

            <div>
              <input placeholder="Confirm password"></input>
              <ConfirmTerm onClick={() => setConfirmFlg(!confirmFlg)}>
                {
                  confirmFlg ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />
                }
                <p>* I agree to the ChangeBlock Data platform term's service</p>
              </ConfirmTerm>
            </div>

            <button className="sign-in"> Create Account </button>

            <GoogleLogin></GoogleLogin>

            <p className="to-signup">
              Already have an account? <Link to={PUBLIC_ROUTES.login}> Sign in </Link>
            </p>

          </div>
        </LogonForm>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

const Container = styled.div<inter_container>`
  display: flex;
  .login-back {
    width:  50%;
    height: 100%;
    @media screen and (max-width: 820px) {
      display: none;
    }
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
const LogonForm = styled.div`
  padding: 50px 140px;
  width: 50%;
  @media screen and (max-width: 1200px) {
    padding: 50px;
  }  

  @media screen and (max-width: 820px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 6px;

    font-family: 'Urbanist-Medium';
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.fontColor1};

    margin-bottom: 50px;
  }

  .labels {
    .title {
      font-family: 'Inter-Medium';
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: ${p => p.theme.fontColor1};
    }
  
    .desc {
      font-family: 'Inter-Medium';
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: ${p => p.theme.fontColor2};
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 50px;
    input {
      width: 100%;
      height: 50px;
      ${input1};
    }

    .sign-in {
      ${btn1}
      font-size: 20px;
      width: 100%;
    }

    .to-signup {
      font-family: 'Inter-Medium';
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: ${p => p.theme.fontColor2};
      a {
        color: ${p => p.theme.themeColor};
        text-decoration: none;
      }
    }
  }

`

const ConfirmTerm = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  cursor: pointer;
  svg {
    transform: scale(1.6);
  }

  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${p => p.theme.fontColor2};
`

const Label = styled.span`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${p => p.theme.fontColor2};
`

export default SignUp;