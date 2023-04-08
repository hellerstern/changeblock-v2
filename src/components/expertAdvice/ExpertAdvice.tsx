import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { FaTelegramPlane } from 'react-icons/fa';
import axios from "axios";

import {
  ImgAdviceWoman,
  ImgAdviceMail,
  ImgAdviceCall,
} from '../../assets/images';

import { input1, btn1 } from "../globalStyles/globalStlyles";

const ExpertAdvice = () => {

  const inputRef = useRef(null);
  const [msg, setMsg] = useState('');
  const [chatContent, setChatContent] = useState<any>([]);

  useEffect(() => {
    console.log("chatContent", chatContent);
  }, [chatContent]);

  const chatWithChatGpt = async () => {
    setChatContent((chatContent: any) => [...chatContent, { me: msg }]);
    setMsg('');
    await axios.post('https://chatgpt-analysis.herokuapp.com/expert_analysis', {
      user_content: msg
    }).then(res => {
      setChatContent((chatContent: any) => [...chatContent, { helper: res.data.response }]);
    }).then(err => console.log(err))
  }

  const expertProfile = {
    name: 'Nene Ajayi',
    avatar: ImgAdviceWoman,
    status: 1, // 1: online, -1: away, 0: offline
  }

  return (
    <Wrapper>
      {/* <div className="title">
        <p></p>
        <p></p>
      </div> */}

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
      <MsgBox>
        {
          chatContent.map((item: any, index: any) =>
          (
            <>
              {
                item.me && (
                  <p><b>me:</b> {item.me}</p>
                )
              }
              {
                item.helper && (
                  <p><b>insightX:</b> {item.helper}</p>
                )
              }
            </>
          ))
        }
      </MsgBox>
      <MsgInput>
        <input ref={inputRef} onKeyDown={(e) => {
          if (e.code !== 'Enter') return;
          chatWithChatGpt();
        }}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}></input>
        <FaTelegramPlane onClick={() => chatWithChatGpt()}></FaTelegramPlane>
      </MsgInput>

      <SendMsg>
        {/* <button>Send message</button> */}
      </SendMsg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 39%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
const MsgBox = styled.div`
  ${input1}
  width: 100%;
  max-height: 185px;
  min-height: 185px;

  font-family: 'Inter-Regular';
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${p => p.theme.themeColor2};
  margin-bottom: 5px;

  overflow-y: auto;

  p {
    margin: 10px 0;
  }
`
const SendMsg = styled.div`
  button {
    ${btn1}
    float: right;
  }
`
const MsgInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  input {
    ${input1}
    font-size: 14px;
    padding: 10px;
    flex: 1;
  }
  svg {
    color: ${p => p.theme.themeColor};
    transform: scale(1.3);
    cursor: pointer;
  }
  margin: 20px 0;
`
export default ExpertAdvice;