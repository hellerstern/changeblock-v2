import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar";
import AuthHeader from "../../components/authHeader/AuthHeader";
import { btn1, btn2 } from "../../components/globalStyles/globalStlyles";

import { ImgCard } from "../../assets/images";

const SubScriptions = () => {

  const trs = ['Subscription Type', 'Date', 'Price', 'Tax Invoice Number', 'Status']

  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <SubScriptionMain>
        <AuthHeader></AuthHeader>
        <SubScriptContainer>
          <p className="title">Subscriptions</p>
          <StyledDiv1>
            <CurrentPlan>
              <div className="header">
                <p className="title1">Current Plan</p>
                <div>
                  <p>Auto renewal</p>
                </div>
              </div>

              <p className="basic-plan">Basic Plan/ <span>$30 Monthly</span></p>

              <div className="renewal-dates">
                <p>Renewal Date: 23 March 2023</p>
              </div>

              <p className="note">
                *Vat and local taxes may apply
              </p>

              <div className="buttons">
                <button className="btn1">Cancel Subscription</button>
                <button className="btn2">Upgrade Plan</button>
              </div>
            </CurrentPlan>

            <PaymentMethods>
              <p className="title">Payment Methods</p>

              <div className="master-card">
                <img src={ImgCard} />
                <p>Master Card</p>
                <p>**** **** **** 5678</p>
              </div>
              <div className="btn-container">
                <button>Updata Payment Method</button>
              </div>

              <div className="bill-info">
                <p className="subtitle">
                  Billing Information
                </p>
                <p>Osas Joseph</p>
                <p>Osasjoseph@gmail.com</p>
                <p>No 15 Titus crescent, Wuse 2, FCT, Abuja</p>
              </div>

              <div className="btn-container">
                <button>Updata Payment Method</button>
              </div>
            </PaymentMethods>
          </StyledDiv1>

          <SubScriptionHistory>
            <p className="title">Subscription History</p>

            <table>
              <tr>

              </tr>
            </table>
          </SubScriptionHistory>
        </SubScriptContainer>
      </SubScriptionMain>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
`

const SubScriptionMain = styled.div`
  padding: 5px;
  width: calc(100vw - 220px);
  min-height: calc(100vh -20px);
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`
const SubScriptContainer = styled.div`
  .title {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.themeColor};
  }
`
const CurrentPlan = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 25px 33px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    .title1 {
      font-family: 'Inter-Medium';
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: ${p => p.theme.fontColor2};
    }
    div {
      p {
        font-family: 'Inter-Medium';
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #888383;
      }
    }
  }
  .basic-plan {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: ${p => p.theme.fontColor2};
    margin: 10px 0;
    span {
      color: ${p => p.theme.themeColor};
    }
  }
  .renewal-dates {
    p {
      font-family: 'Inter-Medium';
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #888383;
    }
  }

  .note {
    font-family: 'Inter-Medium';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #05BE70;
    margin-top: 105px;
    margin-bottom: 35px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    .btn1 {
      ${btn2}
    }
    .btn2 {
      ${btn1}
    }
  }
`

const StyledDiv1 = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`
const PaymentMethods = styled.div`
  padding: 25px 33px;
  background: #FFFFFF;
  border-radius: 8px;
  .title {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.fontColor2};
  }

  .master-card {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    p {
      font-family: 'Inter-Medium';
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #888383;
    }
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
    margin: 10px 0;
    button {
      ${btn2}
    }
  }

  .bill-info {
    p {
      font-family: 'Inter-Medium';
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #888383;
    }

    .subtitle {
      font-family: 'Inter-Medium';
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: ${p => p.theme.fontColor2};
    }
  }
`
const SubScriptionHistory = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 25px 33px;
`

export default SubScriptions;