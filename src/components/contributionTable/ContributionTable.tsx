import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import AppContext from "../../context/context";
import { ApiUrls } from "../../config/APIConfig";
import Loading from "../loading/Loading";

const ContributionTable = () => {

  const AppData = useContext(AppContext);

  const [reason, setReason] = useState([]);
  const [effect, setEffect] = useState([]);

  // GetContribSummary
  const getContibSummary = async () => {
    await axios.post(ApiUrls.GetContribSummary, {
      index: AppData.randomIndex
    })
      .then(response => {
        let reason = response.data.data.Reason;
        let effect = response.data.data.Effect;
        for (let i = 0; i < reason.length; i++) {
          reason[i] = reason[i].split('=')[0].trim();
        }
        setReason(reason);
        setEffect(effect);
      })
      .catch(err => console.log(err));
  }

  const getContibSummary1 = async () => {
    await axios.post(ApiUrls.GetContribSummary, {
      features: AppData.featureInput
    })
      .then(response => {
        let reason = response.data.data.Reason;
        let effect = response.data.data.Effect;
        for (let i = 0; i < reason.length; i++) {
          reason[i] = reason[i].split('=')[0].trim();
        }
        setReason(reason);
        setEffect(effect);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getContibSummary();
  }, [AppData.randomIndex]);

  useEffect(() => {
    getContibSummary1();
  }, [AppData.featureInput]);

  return (
    <Wrapper>
      <div className="title">
        <p>Contribution Table</p>
        <p></p>
      </div>
      {
        JSON.stringify(reason) !== '[]' ? (
          <Datas>
            {
              reason.map((item, index) => (
                <Data key={index}>
                  <p className="name">
                    {
                      item
                    }
                  </p>
                  <p className="value">
                    {
                      effect[index]
                    }
                  </p>
                </Data>
              ))
            }
          </Datas>
        ) : (
          <div className="loading">
            <Loading></Loading>
          </div>
        )
      }

    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 60%;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.themeColor};
    padding-bottom: 7px;
    border-bottom: 1px solid #ACE9CF;
    margin-bottom: 20px;
  }

  position: relative;
  .loading {
    position: absolute;
    top: 50%;
    left: calc(50% - 40px);
  }
`
const Datas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const Data = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  
  font-family: 'Inter-Medium';
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  .name {
    color: ${p => p.theme.fontColor2};
  }

  .value {
    color: ${p => p.theme.themeColor};
  }
`

export default ContributionTable;