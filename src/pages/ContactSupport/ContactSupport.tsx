import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar";
import AuthHeader from "../../components/authHeader/AuthHeader";
import { btn1, input1 } from "../../components/globalStyles/globalStlyles";
import { ImgPhone, ImgMail } from "../../assets/images";

const ContactSupport = () => {
  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <SubScriptionMain>
        <AuthHeader></AuthHeader>

        <MainContainer>
          <p className="title">
            Contact Support
          </p>
          <div className="label">
            <p>How can we help?</p>
            <p>We would love to hear from you</p>
          </div>
          <GiveCall>
            <div>
              <img src={ImgPhone}></img>
              <p>Give us a call</p>
            </div>
            <p className="note">*Local rates and tarrifs may apply</p>
          </GiveCall>

          <LetsChat>
            <div>
              <img src={ImgMail}></img>
              <p>Let's have a chat</p>
            </div>

            <textarea></textarea>
            <button>Send message</button>
          </LetsChat>
        </MainContainer>
      </SubScriptionMain>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
`
const SubScriptionMain = styled.div`
  padding: 5px 20px;
  flex: 1;
  min-height: calc(100vh -20px);
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`
const MainContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  .title {
    font-family: 'Inter-Medium';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #05BE70;
  }
  .label {
    margin-top: 45px;
    p {
      font-family: 'Inter-Medium';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #4D5054;
    }
  }
`
const GiveCall = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 30px 33px;
  width: 470px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  margin-top: 30px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      font-family: 'Inter-Medium';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #4D5054;
    }
  }
  .note {
    font-family: 'Inter-Medium';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #05BE70;
    margin-top: 20px;
  }
`

const LetsChat = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 30px 33px;
  width: 470px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  margin-top: 30px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    p {
      font-family: 'Inter-Medium';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #4D5054;
    }
  }
  textarea {
    ${input1}
    width: 100%;
    min-height: 150px;
    margin-bottom: 30px;
  }

  button {
    ${btn1}
  }
`
export default ContactSupport;