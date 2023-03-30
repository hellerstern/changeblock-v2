import { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import { enqueueSnackbar } from "notistack";
import "firebase/compat/auth";
import { PRIVATE_ROUTES } from "../../config/routes";
import { ImgGoogle } from "../../assets/images";

const GoogleLogin = () => {

  useEffect(() => {
    JSON.parse(localStorage.getItem('profile') || '{}') && navigate(PRIVATE_ROUTES.dashboard)
  }, [])

  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      window.localStorage.setItme('profile', JSON.stringify(result));
      navigate(PRIVATE_ROUTES.dashboard);
      enqueueSnackbar('Welcome', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Login failded', { variant: 'warning' });
    }
  }

  return (
    <Wrapper onClick={handleGoogleLogin}>
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