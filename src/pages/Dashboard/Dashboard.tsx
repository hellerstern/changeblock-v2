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
`

const DashboardMain = styled.div`
  padding: 5px;
  width: calc(100vw - 220px);
  background-color: #F5F5F5;;
`

export default Dashboard;