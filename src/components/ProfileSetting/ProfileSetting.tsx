import styled from "styled-components";
import { input1 } from "../globalStyles/globalStlyles";

const ProfileSetting = () => {

  const profile = JSON.parse(localStorage.getItem('profile') || '{}').additionalUserInfo.profile;
  console.log(profile);

  return (
    <Wrapper>
      <p className="title">
        Personal Information
      </p>

      <div className="avatar">
        <img src={profile.picture.split('=')[0] + '=s120-c'}></img>
        <p>
          Upload new avatar
        </p>
      </div>

      <div className="group">
        <StyledInput>
          <p>First Name</p>
          <input placeholder={profile.given_name}></input>
        </StyledInput>
        <StyledInput>
          <p>Last Name</p>
          <input placeholder={profile.family_name}></input>
        </StyledInput>
      </div>

      <div className="group">
        <StyledInput>
          <p>Email</p>
          <input placeholder={profile.email}></input>
        </StyledInput>
        <StyledInput>
          <p>Phone</p>
          <input placeholder={"+44 0989 1826 482"}></input>
        </StyledInput>
      </div>

      <div className="group">
        <StyledInput>
          <p>Country</p>
          <input placeholder={'United Kingdom'}></input>
        </StyledInput>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 30px 33px;
  margin-top: 30px;
  width: 790px;
  .group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
  .title {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.themeColor};
  }
  .avatar {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    img {
      border-radius: 50%;
    }
    p {
      font-family: 'Inter-Medium';
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #05BE70;
    }
  }
`
const StyledInput = styled.div`
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
  }
`

export default ProfileSetting;