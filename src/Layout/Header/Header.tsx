import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiMenu2Line } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'
import { PUBLIC_ROUTES } from "../../config/routes";
import { ImgLogo } from "../../assets/images";

import { btn1 } from "../../components/globalStyles/globalStlyles";

interface inter_mobileMenu {
  flag: boolean
}

interface inter_header {
  themeFlag: number
}

const Header = (props: inter_header) => {

  const [mobMenu, setMobMenu] = useState(false);

  const links = [
    {
      txt: 'Features',
      link: PUBLIC_ROUTES.features
    },
    {
      txt: 'Pricing',
      link: PUBLIC_ROUTES.pricing
    },
    {
      txt: 'FAQs',
      link: PUBLIC_ROUTES.faqs
    },
    {
      txt: 'Contact Us',
      link: PUBLIC_ROUTES.contactus
    }
  ]

  return (
    <Wrapper themeFlag={props.themeFlag}>
      <Container>
        <Logo to={'/'}>
          <img src={ImgLogo} alt='logo' />
          <span>ChangeBlock</span>
        </Logo>

        <HeaderLinks>
          {
            links.map((item, index) => (
              <HeaderLink to={item.link} key={index}>{item.txt}</HeaderLink>
            ))
          }
          <SignUpLink to={PUBLIC_ROUTES.signup}>Sign Up</SignUpLink>
          <StyledRiMenu2Line onClick={() => setMobMenu(!mobMenu)} className='menu-icon'></StyledRiMenu2Line>
        </HeaderLinks>

        <MobileDiv flag={mobMenu}>
          <div>
            <FaTimes onClick={() => setMobMenu(!mobMenu)}></FaTimes>

            {
              links.map((item, index) => (
                <MobileMenuLink to={item.link} key={index} onClick={() => setMobMenu(false)}>{item.txt}</MobileMenuLink>
              ))
            }

            <MobileSignUpLink to={PUBLIC_ROUTES.signup}>Sing Up</MobileSignUpLink>
          </div>
        </MobileDiv>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div<inter_header>`
  width: 100%;
  max-width: ${p => p.theme.maxWidth};
  margin: auto;
  padding: 50px;
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
  * {
    color: ${p => p.themeFlag ? p.theme.fontColor3 : p.theme.fontColor1};
    font-family: 'Urbanist-Medium';
  }

  a {
    text-decoration: none;
  }

  .menu-icon {
    fill: ${p => p.themeFlag ? p.theme.fontColor3 : p.theme.fontColor1};
  }
`

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  span {
    font-size: 20px;
    letter-spacing: 1px;
  }
`

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

const HeaderLink = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  display: block;
  @media screen and (max-width: ${p => p.theme.headerMedia1}) {
    display: none;
  }
  transition: all .3s;
  &:hover {
    color: ${p => p.theme.themeColor};
  }
`
const MobileMenuLink = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  display: block;
`

const SignUpLink = styled(Link)`
  ${btn1}
  display: block;
  @media screen and (max-width: ${p => p.theme.headerMedia1}) {
    display: none;
  }
`

const MobileSignUpLink = styled(Link)`
  ${btn1}
  display: block;
`

const StyledRiMenu2Line = styled(RiMenu2Line)`
  display: none;
  @media screen and (max-width: ${p => p.theme.headerMedia1}) {
    display: block;
  }
  fill: ${p => p.theme.fontColor1};
  transform: scale(1.5);
`

const MobileDiv = styled.div<inter_mobileMenu>`
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  right: 0;
  transition: all .3s;
  top: ${p => p.flag ? '0' : '100vh'};
  background-color: #146e48;
  * {
    color: white;
  }
  div {
    position: relative;
    padding: 50px;
    svg {
      position: absolute;
      top: 30px;
      right: 30px;
      transform: scale(1.3);
    }
    a {
      margin: 20px 0;
    }
  }
`

export default Header;