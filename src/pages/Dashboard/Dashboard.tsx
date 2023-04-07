import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar";
import AuthHeader from "../../components/authHeader/AuthHeader";
import Topbar from "../../components/topbar/Topbar";
const Dashboard = () => {

  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <DashboardMain>
        <AuthHeader></AuthHeader>
        <Topbar></Topbar>
      </DashboardMain>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
`

const DashboardMain = styled.div`
  padding: 5px;
  flex: 1;
  min-height: calc(100vh -20px);
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`

export default Dashboard;