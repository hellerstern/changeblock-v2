import { useContext } from "react";
import styled from "styled-components";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FileUploader from "../../fileUploader/FileUploader";
import AppContext from "../../../context/context";
import FileName from "../../fileName/FileName";
import { btn1 } from "../../globalStyles/globalStlyles";
import Loading from "../../loading/Loading";
import MyDocument from "../../myDocument/MyDocument";

const AspectBasedSentiment = () => {
  const AppData = useContext(AppContext);
  return (
    <Wrapper>
      {
        AppData.loading3 ? (
          <div className="loading">
            <Loading></Loading>
          </div>
        ) : (
          AppData.data3.length !== 0 ? (
            <Container>
              <LeftDiv>
                <FileName></FileName>
              </LeftDiv>
              <RightDiv>
                <DisplayData>
                  <div className="title">
                    <p>Aspect Based Sentiment </p>
                    <p className="p-2">Context and Details</p>
                  </div>
                  <div className="main">
                    {
                      AppData.data3.map((item: any, index: number) => (
                        <div key={index}>
                          <p className="subtitle"> {item[0]} </p>
                          <p className="subcontent"> {item[1]} </p>
                        </div>
                      ))
                    }
                  </div>
                  <PDFDownloadLink
                    document={<MyDocument data={[AppData.data3OfPDF]} />}
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

    .p-2 {
      font-family: 'Inter-Regular';
      font-size: 16px;
      line-height: 19px;
    }
  }

  .main {
    padding: 20px 35px;
    max-height: 500px;
    overflow-x: auto;
    div {
      padding: 64px 0;
      border-bottom: 1px solid #D9D9D9;
      color: ${p => p.theme.fontColor2};
      .subtitle {
        font-family: 'Inter-Medium';
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
      }

      .subcontent {
        font-family: 'Inter-Medium';
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
      }
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

export default AspectBasedSentiment;