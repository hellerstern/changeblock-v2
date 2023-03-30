import styled from "styled-components";
import { ImgBill } from "../../assets/images";
import { FiChevronDown } from 'react-icons/fi';

const AuthHeader = () => {

  const profile = JSON.parse(localStorage.getItem('profile') || '{}').additionalUserInfo.profile;
  console.log(profile);

  return (
    <Wrapper>
      <Container>
        <Account>
          <p className="profile-name">
            {
              profile.name
            }
          </p>
          <img src={ImgBill}></img>
          <img src={profile.picture.split('=')[0] + '=s56-c'} className="avatar"></img>
          <FiChevronDown></FiChevronDown>
        </Account>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Account = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .profile-name {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.fontColor2}
  }

  .avatar {
    border-radius: 50%;
  }
`

export default AuthHeader;