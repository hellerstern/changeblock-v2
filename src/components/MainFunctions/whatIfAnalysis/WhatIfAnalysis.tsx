import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import AppContext from "../../../context/context";
import ContributionPlot from "../../contributionPlot/ContributionPlot";
import FeatureInput from "../../featureInput/FeatureInput";
import Prediction from "../../prediction/Prediction";
import { btn1 } from "../../globalStyles/globalStlyles";
import ChartBox from "../../chartbox/ChartBox";
import { ApiUrls } from "../../../config/APIConfig";
import ContributionTable from "../../contributionTable/ContributionTable";

const WhatIfAnalysis = () => {

  const AppData = useContext(AppContext);

  const [contribution, setContribution] = useState(null);

  async function getContributionPlot() {
    await axios.post(ApiUrls.GetContributionPlot, {
      index: AppData.randomIndex
    })
      .then(res => {
        console.log(res.data.html);
        setContribution(res.data.html);
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getContributionPlot();
  }, [AppData.randomIndex])


  return (
    <Wrapper>
      <div className="select-project">
        <button onClick={AppData.getRandomIndex}>Select a project: {AppData.randomIndex}</button>
      </div>
      <FeatureInput></FeatureInput>
      <Graphs>
        <Prediction></Prediction>
        <ChartBox
          heading={"Contribution Plot"}
          subheading={
            "How has each feature contributed to the prediction?"
          }
          children={
            <ContributionPlot
              chart={
                contribution
              }
            />
          }
          popout={true}
        ></ChartBox>
      </Graphs>
      <Graphs>
        <ContributionTable />
      </Graphs>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 30px;
  .select-project {
    display: flex;
    justify-content: flex-end;
    button {
      ${btn1}
    }
  }
`
const Graphs = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
`

export default WhatIfAnalysis;