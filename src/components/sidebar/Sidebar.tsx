import styled from "styled-components";
import { ImgLogo } from "../../assets/images";

import { PRIVATE_ROUTES } from "../../config/routes";
import {
  ImgDashboard,
  ImgAnalysis,
  ImgSubcription,
  ImgContact,
  ImgSetting,
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
        <Logo>
          <img src={ImgLogo}></img>
          <span>ChangeBlock</span>
        </Logo>
      </Container>

      <SidebarDiv>

      </SidebarDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.themeColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100%;
  min-height: 100vh;
`
const Container = styled.div`
  margin-top: 40px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: auto;

  font-family: 'Urbanist-Medium';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${p => p.theme.fontColor3};
`
const SidebarDiv = styled.div`
  
`

export default Sidebar;