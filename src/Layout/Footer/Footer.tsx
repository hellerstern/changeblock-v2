import styled from "styled-components";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../config/routes";
import {
  ImgSocial1,
  ImgSocial2,
  ImgSocial3,
} from '../../assets/images'

const Footer = () => {

  const public_urls = [
    {
      url: PUBLIC_ROUTES.features,
      title: 'Features',
    },
    {
      url: PUBLIC_ROUTES.contactus,
      title: 'Contact Us',
    },
    {
      url: PUBLIC_ROUTES.faqs,
      title: 'FAQs',
    },
    {
      url: PUBLIC_ROUTES.pricing,
      title: 'Pricing',
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
        
        <SocialUrls>
          {/* <p>Reach out to us social media</p>

          <div>
            {
              social.map((item, index) => (
                <a href={item.url} key={index}><img src={item.img}></img></a>
              ))
            }
          </div> */}

          <p>© 2023 Changeblock Data Platform</p>
        </SocialUrls>
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

  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

const PublicUrls = styled.div`
  display: grid;
  width: 30%;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  a {
    color: white;
    text-decoration: none;
  }
`

const SocialUrls = styled.div`
  div {
    display: flex;
    gap: 20px;
    margin: 30px 0;
  }
`

export default Footer;