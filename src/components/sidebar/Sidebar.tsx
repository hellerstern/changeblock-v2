import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ImgLogo } from "../../assets/images";

import { PRIVATE_ROUTES } from "../../config/routes";
import {
  ImgDashboard,
  ImgAnalysis,
  ImgSubcription,
  ImgContact,
  ImgSetting,

  ImgSidebarBack1,
  ImgSidebarBack2,
} from '../../assets/images';

const Sidebar = () => {

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

  return (
    <Wrapper>
      <Container>
        <Logo to='/'>
          <img src={ImgLogo}></img>
          <span>INSIGHTX</span>
        </Logo>
      </Container>

      <SidebarDiv>
        {
          data.map((item, index) => (
            <Link to={item.url} key={index}><img src={item.img}></img><p>{item.name}</p></Link>
          ))
        }
      </SidebarDiv>
    </Wrapper>
  )
}

const customStyle = css`
  background-image: url(${ImgSidebarBack2}), url(${ImgSidebarBack1});
  background-position: 0 800px, 0 1200px;
  background-repeat: no-repeat, no-repeat;
  min-height: 100vh;
`

const Wrapper = styled.div`
  background-color: ${p => p.theme.themeColor};
  width: 220px;
  @media screen and (max-width: 1024px) {
    width: 70px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  ${customStyle}
`
const Container = styled.div`
  padding-top: 40px;
`
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: auto;
  text-decoration: none;

  font-family: 'Urbanist-Medium';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${p => p.theme.fontColor3};

  span {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`
const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-left: 20px;
  margin-top: 100px;
  @media screen and (max-width: 1024px) {
    margin: auto;
    margin-top: 100px;
  }
  a { 
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;

    font-family: 'Inter-Thin';
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: white;
    text-decoration: none;
    @media screen and (max-width: 1024px) {
      justify-content: center;
      p {
        display: none;
      }
    }
  }
`

export default Sidebar;