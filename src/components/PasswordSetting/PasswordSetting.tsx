import styled from "styled-components";
import { input1, btn1 } from "../globalStyles/globalStlyles";

const PasswordSetting = () => {
  return (
    <Wrapper>
      <p className='title'>
        Change Password
      </p>

      <StyledInput>
        <p>Current Password</p>
        <input type={'password'} placeholder={'**********'}></input>
      </StyledInput>

      <StyledInput>
        <p>Enter new password</p>
        <input type={'password'} placeholder={'**********'}></input>
      </StyledInput>

      <StyledInput>
        <p>Confirm password</p>
        <input type={'password'} placeholder={'**********'}></input>
      </StyledInput>

      <div className="btn">
        <button>
          Update Password
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 30px 33px;
  margin-top: 30px;
  width: 410px;
  .title {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.themeColor};
  }
  .btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
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

export default PasswordSetting;