import styled from "styled-components";
import { useState } from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import AuthHeader from "../../components/authHeader/AuthHeader";
import ProfileSetting from "../../components/ProfileSetting/ProfileSetting";
import PasswordSetting from "../../components/PasswordSetting/PasswordSetting";
import BillInfo from "../../components/BillInfo/BillInfo";

interface inter_topbar {
  flag: number
}


const Setting = () => {

  const [flagBar, setFlagBar] = useState(1);

  const data = [
    {
      name: 'Profile Setting',
      component: <ProfileSetting></ProfileSetting>,
    },
    {
      name: 'Password',
      component: <PasswordSetting></PasswordSetting>,
    },
    {
      name: 'Billing Information',
      component: <BillInfo></BillInfo>,
    }
  ]
  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <SubScriptionMain>
        <AuthHeader></AuthHeader>

        <SettingTop>
          <TopbarDiv flag={flagBar}
          >
            {
              data.map((item, index) => (
                <p key={index} onClick={() => setFlagBar(index + 1)}>
                  {
                    item.name
                  }
                </p>
              ))
            }
          </TopbarDiv>
          {
            data[flagBar - 1].component
          }
        </SettingTop>
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
  width: calc(100vw - 220px);
  min-height: calc(100vh -20px);
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`

const SettingTop = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`
const TopbarDiv = styled.div<inter_topbar>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 120px;
  border-bottom: 1.5px solid #D4D5D6;
  
  p {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #B8B9BB;
    cursor: pointer;
    padding-bottom: 10px;
  }  

  p:nth-child(${p => p.flag}) {
    color: ${p => p.theme.themeColor};
    font-weight: 600;
    border-bottom: 2px solid ${p => p.theme.themeColors};
  }
`
export default Setting;