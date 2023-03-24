import styled from "styled-components";

import { Link } from "react-router-dom";

import {
  ImgSocial1,
  ImgSocial2,
  ImgSocial3,
} from '../../assets/images'

const Footer = () => {

  const public_urls = [
    {
      url: '/',
      title: 'Features',
    },
    {
      url: '/',
      title: 'Contact Us',
    },
    {
      url: '/',
      title: 'FAQs',
    },
    {
      url: '/',
      title: 'Privacy Policy',
    },
    {
      url: '/',
      title: 'Pricing',
    },
    {
      url: '/',
      title: 'Terms of service',
    },
  ]

  const social = [
    {
      img: ImgSocial1,
      url: 'https://twitter.com',
    },
    {
      img: ImgSocial2,
      url: 'https://linkedin.com',
    },
    {
      img: ImgSocial3,
      url: 'https://facebook.com',
    }
  ]

  return (
    <Wrapper>
      <Container>
        <PublicUrls>
          {
            public_urls.map((item, index) => (
              <Link to={item.url} key={index}>{item.title}</Link>
            ))
          }
        </PublicUrls>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.themeColor};
  color: ${p => p.theme.fontColor3};
  font-family: 'Inter-Medium';
  margin-top: 100px;
`

const Container = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: auto;
  padding: 50px;
`

const PublicUrls = styled.div`
  display: flex;
  flex-wrap: wrap;
  a {
    color: white;
    text-decoration: none;
  }
`

export default Footer;