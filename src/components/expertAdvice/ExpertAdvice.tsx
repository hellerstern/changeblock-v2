import styled from "styled-components";

import {
  ImgAdviceWoman,
  ImgAdviceMail,
  ImgAdviceCall,
} from '../../assets/images';

import { input1, btn1 } from "../globalStyles/globalStlyles";

const ExpertAdvice = () => {

  const expertProfile = {
    name: 'Nene Ajayi',
    avatar: ImgAdviceWoman,
    status: 1, // 1: online, -1: away, 0: offline
  }

  return (
    <Wrapper>
      <div className="title">
        <p>Contribution Table</p>
        <p></p>
      </div>

      <ContactDiv>
        <Expert>
          <img src={expertProfile.avatar}></img>
          <div className='status-name'>
            <p className="expert-name"> {expertProfile.name} </p>
            <div className="status">
              <svg height="10" width="10">
                <circle cx="5" cy="5" r="5" stroke="black" stroke-width="0" fill="#05BE70" />
              </svg>
              {
                expertProfile.status === 1 ? 'Online' : expertProfile.status === -1 ? 'Away' : 'Offline'
              }
            </div>
          </div>
        </Expert>

        <Infos>
          <img src={ImgAdviceMail}></img>
          <img src={ImgAdviceCall}></img>
        </Infos>
      </ContactDiv>
      <MsgBox></MsgBox>

      <SendMsg>
        <button>Send message</button>
      </SendMsg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 39%;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.themeColor};
    padding-bottom: 7px;
    border-bottom: 1px solid #ACE9CF;
    margin-bottom: 20px;
  }
`

const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`
const Expert = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  .status-name {
    .expert-name {
      font-family: 'Inter-Regular';
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: ${p => p.theme.themeColor2};
      margin-bottom: 5px;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'Inter-Medium';
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #05BE70;
    }
  }
`

const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const MsgBox = styled.textarea`
  ${input1}
  width: 100%;
  height: 185px;

  font-family: 'Inter-Regular';
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${p => p.theme.themeColor2};
  margin-bottom: 5px;
`
const SendMsg = styled.div`
  button {
    ${btn1}
    float: right;
  }
`
export default ExpertAdvice;