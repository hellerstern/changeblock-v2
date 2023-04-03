import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import AppContext from "../../../context/context";
import FeatureInput from "../../featureInput/FeatureInput";
import Prediction from "../../prediction/Prediction";
import { btn1 } from "../../globalStyles/globalStlyles";
import { ApiUrls } from "../../../config/APIConfig";
import ContributionTable from "../../contributionTable/ContributionTable";
import ContributionPlot1 from "../../contributionPlot1/ContributionPlot1";

import ContributionPlot from "../../contributionPlot/ContributionPlot";
import ChartBox from "../../chartbox/ChartBox";
import ExpertAdvice from "../../expertAdvice/ExpertAdvice";
import Summary from "../../Summary/Summary";
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
        <ContributionPlot1 />
      </Graphs>
      <Graphs>
        <ContributionTable />
        <ExpertAdvice></ExpertAdvice>
      </Graphs>
      <Summary></Summary>
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
  margin: 20px 0;
`

export default WhatIfAnalysis;