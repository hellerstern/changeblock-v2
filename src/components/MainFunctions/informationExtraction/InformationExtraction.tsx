import { useContext } from "react";
import styled from "styled-components";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FileUploader from "../../fileUploader/FileUploader";
import AppContext from "../../../context/context";
import FileName from "../../fileName/FileName";
import Loading from "../../loading/Loading";
import MyDocument from "../../myDocument/MyDocument";
import { btn1 } from "../../globalStyles/globalStlyles";

const InformationExtraction = () => {
  const AppData = useContext(AppContext);

  return (
    <Wrapper>
      {
        AppData.loading1 ? (
          <div className="loading">
            <Loading></Loading>
          </div>
        ) : (
          AppData.data1 ? (
            <Container>
              <LeftDiv>
                <FileName></FileName>
              </LeftDiv>
              <RightDiv>
                <DisplayData>
                  <div className="title">
                    <p>Information Extraction</p>
                  </div>
                  <div className="main">
                    <p>
                      {
                        AppData.data1
                      }
                    </p>
                  </div>
                  {/* <button>Download PDF</button> */}
                  <PDFDownloadLink
                    document={<MyDocument data={[AppData.data1]} />}
                    fileName="information-extraction.pdf"
                  >
                    Download PDF
                  </PDFDownloadLink>
                </DisplayData>
              </RightDiv>
            </Container>
          ) : (
            <FileUploader></FileUploader>
          )
        )
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 20px;
  flex: 1;
  position: relative;

  .loading {
    position: absolute;
    left: calc(50% - 40px);
    top: calc(50% - 40px);
  }
`
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
const LeftDiv = styled.div`
  width: 49%;
`
const RightDiv = styled.div`
  width: 49%;
`
const DisplayData = styled.div`
  background: #EEEEEE;
  border-radius: 8px;
  
  .title {
    background: #FFFFFF;
    border-radius: 8px;
    padding: 25px 35px;
    p {
      font-family: 'Inter-Medium';
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: ${p => p.theme.fontColor2};
    }
  }

  .main {
    padding: 20px 35px;
    max-height: 500px;
    overflow-x: auto;
    p {
      font-family: 'Inter-Medium';
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: ${p => p.theme.fontColor2};
    }


    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
  }
  a {
    ${btn1}
    float: right;
    margin: 20px;
  }
`

export default InformationExtraction;