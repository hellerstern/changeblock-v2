import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImgBill } from "../../assets/images";
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import { CiCircleRemove } from 'react-icons/ci';

import { PRIVATE_ROUTES } from "../../config/routes";

import {
  ImgDashboard,
  ImgAnalysis,
  ImgSubcription,
  ImgContact,
  ImgSetting,
} from '../../assets/images';

interface inter_mobile_resp {
  flag: boolean
}

const AuthHeader = () => {

  const data = [
    {
      name: 'Dasboard',
      img: ImgDashboard,
      url: PRIVATE_ROUTES.dashboard
    },
    {
      name: 'Analysis History',
      img: ImgAnalysis,
      url: PRIVATE_ROUTES.analysis
    },
    {
      name: 'Subscriptions',
      img: ImgSubcription,
      url: PRIVATE_ROUTES.subscription,
    },
    {
      name: 'Contact',
      img: ImgContact,
      url: PRIVATE_ROUTES.contact,
    },
    {
      name: 'Setting',
      img: ImgSetting,
      url: PRIVATE_ROUTES.setting,
    }
  ]

  const [flagResp, setFlagResp] = useState(false);

  const profile = JSON.parse(localStorage.getItem('profile') || '{}').additionalUserInfo.profile;
  return (
    <Wrapper>
      <Container>
        <StyledMenu onClick={() => setFlagResp(true)}></StyledMenu>
        <Account>
          <p className="profile-name">
            {
              profile.name
            }
          </p>
          <img src={ImgBill}></img>
          <img src={profile.picture.split('=')[0] + '=s56-c'} className="avatar"></img>
          <FiChevronDown></FiChevronDown>
        </Account>
      </Container>

      <MobileSidebar flag={flagResp}>
        <div>
          {
            data.map((item, index) => (
              <Link to={item.url} key={index}><img src={item.img}></img>{item.name}</Link>
            ))
          }
          <CiCircleRemove onClick={() => setFlagResp(false)}></CiCircleRemove>
        </div>
      </MobileSidebar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`
const Account = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .profile-name {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.fontColor2}
  }

  .avatar {
    border-radius: 50%;
  }
`
const StyledMenu = styled(FiMenu)`
  color: ${p => p.theme.themeColor};
  transform: scale(2);
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const MobileSidebar = styled.div<inter_mobile_resp>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: ${p => p.flag ? '0' : '-300px'};
  height: 100vh;
  width: 300px;
  background-color: ${p => p.theme.themeColor};
  transition: all .3s;

  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    padding: 50px 30px;
    svg {
      position: absolute;
      top: 20px;
      right: 20px;
      color: white;
      transform: scale(2);
    }
  }
  a {
    text-decoration: none;
    display: flex;
    gap: 10px;
    align-items: center;
    color: white;
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`

export default AuthHeader;