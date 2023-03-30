import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import styled from "styled-components";
import AppContext from "../../context/context";
import { ApiUrls } from "../../config/APIConfig";



const ContributionPlot = ({ chart }: { chart: any }) => {

  const AppData = useContext(AppContext);

  async function getContributionPlot() {
    await axios.post(ApiUrls.GetContributionPlot, {
      index: AppData.randomIndex
    })
      .then(res => {
        console.log("getContributionPlot: ", res.data.html);
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getContributionPlot();
  }, [])

  return (
    <Wrapper>
      <div className="d-flex flex-grow text-center">
        <iframe srcDoc={chart} height={500} width={"100%"}></iframe>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`

export default ContributionPlot;