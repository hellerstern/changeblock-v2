import styled from "styled-components";

import {
  ImgWhyCS1,
  ImgWhyCS2,
  ImgWhyCS3,
} from "../../assets/images";

const WhyCU = () => {

  const data = [
    {
      img: ImgWhyCS1,
      title: 'Make Decisions Faster',
      content: 'InsightX’s What-If Analysis Tool empowers users to make informed decisions in real time. It uses the project variables to predict success and boost confidence levels and highlight areas of improvement.'
    },
    {
      img: ImgWhyCS2,
      title: 'Comprehensive Analysis',
      content: 'InsightX’s tools offer a complete and trusted solution for climate data analysis. It ensures that you have access to comprehensive view of your data, leading to faster and better decision making.'
    },
    {
      img: ImgWhyCS3,
      title: 'Intuitive Dashboard',
      content: 'Our easy to use dashboard is designed to provide a seamless experience and allow you access the tools you need in one place to make quick and efficient decisions that impact positively on your business.'
    },
  ]
  return (
    <Wrapper>
      <StyledP>
        Why Choose Us?

      </StyledP>
      <Container>
        {
          data.map((item, index) => (
            <Reason key={index}>
              <img src={item.img} />
              <p className="title">{item.title}</p>
              <p className="content">{item.content}</p>
            </Reason>
          ))
        }
      </Container>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: auto;
  margin-top: 50px;
  text-align: center;
  padding: 100px;
  @media screen and (max-width: 969px) {
    padding: 30px;
  }
`


const StyledP = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 600;
  font-size: 64px;
  color: ${p => p.theme.fontColor1};
  @media screen and (max-width: 670px) {
    font-size: 30px;
  }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (max-width: 969px) {
    justify-content: center;
  }
`

const Reason = styled.div`
  color: ${p => p.theme.fontColor2};
  text-align: left;
  background: #F9F9F9;
  border-radius: 20px;
  padding: 32px 24px;
  width: 380px;
  @media screen and (max-width: 969px) {
    text-align: center;
  }
  .title {
    font-family: 'Inter-Bold';
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin: 48px 0;
    @media screen and (max-width: 969px) {
      margin: 20px 0;
      font-size: 17px;
    }
  }

  .content {
    font-family: 'Inter-Regular';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`

export default WhyCU;