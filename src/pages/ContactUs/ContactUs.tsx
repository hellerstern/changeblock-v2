import styled from "styled-components";

import Header from "../../Layout/Header/Header";
import { btn1, input1 } from "../../components/globalStyles/globalStlyles";

import {
  ImgEllipse1,
  ImgMail,
  ImgPhone
} from "../../assets/images";

const ContactUs = () => {
  return (
    <Wrapper>
      <Container>
        <Header themeFlag={0}></Header>
        <img src={ImgEllipse1} className='bgImg'></img>

        <p className="title">Get In Touch</p>

        <div className="main">
          <Main>
            <Infos>
              <p className="desc">Get questions, compaints or feedback? Our team is always on standby and ready to help!</p>

              <div className="container">
                <Info>
                  <img src={ImgPhone}></img>
                  <div>
                    <p className="label">Call Us</p>
                    <p className="info">+44 735 901 9085</p>
                  </div>
                </Info>

                <Info>
                  <img src={ImgMail}></img>
                  <div>
                    <p className="label">Send an email</p>
                    <p className="info">oluwole.fagbohun@changeblock.com</p>
                  </div>
                </Info>
              </div>
            </Infos>
          </Main>

          <ContactUS>
            <div>
              <input placeholder="Company name"></input>
              <input placeholder="Email"></input>
            </div>

            <input placeholder="Subject" style={{ marginBottom: '30px' }}></input>

            <br></br>
            <textarea placeholder="Type your message" />

            <button> Send Request </button>
          </ContactUS>
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`

const Container = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: auto;
  padding: 50px;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  .bgImg {
    position: absolute;
    top: -500px;
    left: -500px;
    z-index: -1;
  }
  @media screen and (max-width: 600px) {
    overflow: hidden;
  }

  .title {
    margin-top: 200px;
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    color: ${p => p.theme.fontColor1};

    @media screen and (max-width: 1024px) {
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      font-size: 40px;
      line-height: 47px;
    }
  }

  .main {
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }
`

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`

const Infos = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  gap: 100px;
  .desc {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: ${p => p.theme.fontColor2};
    @media screen and (max-width: 1024px) {
      text-align: center;
    }
  }
`

const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 20px;
  margin-bottom: 30px;
  img {
    @media screen and (max-width: 425px) {
      display: none;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .label {
      font-family: 'Inter-Medium';
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: ${p => p.theme.fontColor1};
    }

    .info {
      font-family: 'Inter-Regular';
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: ${p => p.theme.fontColor2};
    }
  }
`

const ContactUS = styled.form`
  @media screen and (max-width: 900px) {
    width: 98%;
  }
  margin: auto;


  input, textarea {
    ${input1}
    width: 100%;
    margin-bottom: 0px;

    @media screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
  
  textarea {
    height: 200px;
    resize: vertical;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    @media screen and (max-width: 768px) {
      gap: 10px;
    }
  }

  button {
    ${btn1}
    float: right;
  }
`

export default ContactUs;

