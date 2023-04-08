import styled from "styled-components";
import { input1, btn1, btn2 } from "../globalStyles/globalStlyles";


const BillInfo = () => {
  return (
    <Wrapper>
      <p className="title">
        Payment Methods
      </p>

      <p className="subtitle">
        Card Details
      </p>

      <div className="group">

        <StyledInput>
          <p>Card Name</p>
          <input placeholder={'John Berkley'}></input>
        </StyledInput>


        <StyledInput>
          <p>CVV</p>
          <input placeholder={'***'}></input>
        </StyledInput>
      </div>

      <div className="group">

        <StyledInput>
          <p>Card Number</p>
          <input placeholder={'**** **** **** 1234'}></input>
        </StyledInput>


        <StyledInput>
          <p>Expiry</p>
          <input placeholder={'12/23'}></input>
        </StyledInput>
      </div>

      <div className='div-btn1'>
        <button>Add payment method</button>
      </div>


      <p className="subtitle">
        Billing Address
      </p>

      <StyledInput>
        <p>Address</p>
        <input placeholder={'1627 Drive, London, United Kingdom'}></input>
      </StyledInput>

      <div className="div-btn2">
        <p>Discard changes</p>
        <button>Upload Billing Info</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 30px 33px;
  width: 660px;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .title {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 20px;
    color: ${p => p.theme.fontColor2};
  }
  .subtitle {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #4D5054;
    margin-top: 60px;
  }

  .group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    div:nth-child(1) {
      input {
        width: 100%;
      }
    }

    div:nth-child(2) {
      input {
        width: 100%;
      }
    }
  }

  .div-btn1 {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    align-items: center;
    button {
      ${btn2}
    }
  }
  .div-btn2 {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    align-items: center;
    gap: 30px;
    p {
      font-family: 'Inter-Medium';
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #4D5054;
    }
    button {
      ${btn1}
    }
  }
`

const StyledInput = styled.div`
  margin-top: 30px;
  p {
    font-family: 'Inter-Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.fontColor2};
  }
  input {
    ${input1};
    margin-top: 10px;
    width: 100%
  }
`
export default BillInfo;