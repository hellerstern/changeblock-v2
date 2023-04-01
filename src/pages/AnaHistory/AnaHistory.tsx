import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar";
import AuthHeader from "../../components/authHeader/AuthHeader";
import { btn1, btn2, input1 } from "../../components/globalStyles/globalStlyles";
import { ImgDownloadDoc } from "../../assets/images";

const AnaHistory = () => {

  const trs = ['Analysis Type', 'Date', 'File size', 'Download',];
  const data = [
    {
      su: 'Analysis Type',
      da: '12/02/2023',
      pr: '33kb',
    },
    {
      su: 'Analysis Type',
      da: '11/02/2023',
      pr: '41kb',
    },
    {
      su: 'Analysis Type',
      da: '10/02/2023',
      pr: '76kb',
    }
  ]

  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <SubScriptionMain>
        <AuthHeader></AuthHeader>
        <MainContainer>
          <p className="title">Subscription History</p>
          <table>
            <tr>
              {
                trs.map((item, index) => (
                  <th key={index}>
                    {item}
                  </th>
                ))
              }
            </tr>
            {
              data.map((item: any, index) => (
                <tr key={index}>
                  <td>
                    {item.su}
                  </td>
                  <td>
                    {item.da}
                  </td>
                  <td>
                    {item.pr}
                  </td>
                  <td>
                    <Button>
                      Download
                      <img src={ImgDownloadDoc}></img>
                    </Button>
                  </td>
                </tr>
              ))
            }
          </table>
        </MainContainer>
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

const MainContainer = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 25px 33px;
  margin-top: 20px;
  .title {
    font-family: 'Inter-Medium';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #05BE70;
  }
  table {
    margin-top: 20px;
    width: 100%;
    tr:nth-child(1) {
      border-bottom: 1px solid red;
    }
  }
  th {
    text-align: left;
    font-family: 'Inter-Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.fontColor2};
    padding: 10px 0;
    margin: 10px 0;
    border-bottom: 1px solid #D4D5D6;
  }
  tr {
    td:nth-last-child() {
      color: red;
    }
  }
  td {
    font-family: 'Inter-Regular';
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    padding: 10px 0;
    color: ${p => p.theme.fontColor2};
  }
`
const Button = styled.button`
  ${btn2}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${p => p.theme.themeColor} !important;
`
export default AnaHistory;