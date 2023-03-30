import { useRef } from 'react';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from 'notistack';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


import { PUBLIC_ROUTES } from "../../config/routes";
import {
  ImgLoginBack,
  ImgLogo,
} from "../../assets/images";
import { btn1, input1 } from "../../components/globalStyles/globalStlyles";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

interface inter_container {
  bgImg: string,
}

const Login = () => {

  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);

  const handleLogin = async () => {
    if (emailRef.current !== null && pwdRef.current !== null) {
      try {
        const result = await firebase.auth().signInWithEmailAndPassword(emailRef.current?.value, pwdRef.current?.value);
        localStorage.setItem('profile', JSON.stringify(result));
        navigate("/dashboard");
        enqueueSnackbar('Welcome', { variant: 'success' });
      } catch (error: any) {
        enqueueSnackbar(error.message, { variant: 'warning' });
      }
    }
  };
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
            <input placeholder="Email" ref={emailRef}></input>
            <input placeholder="Password" ref={pwdRef} type='password'></input>

            <button className="sign-in" onClick={handleLogin}>Sign in</button>

            <GoogleLogin></GoogleLogin>

            <p className="to-signup">
              Don't have an account? <Link to={PUBLIC_ROUTES.signup}> Sign up </Link>
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

    margin-bottom: 60px;
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
    margin-top: 100px;
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

export default Login;