import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import AppContext from "../../context/context";
import { ApiUrls } from "../../config/APIConfig";

const ContributionTable = () => {

  const AppData = useContext(AppContext);

  // GetContribSummary
  const getContibSummary = async () => {
    await axios.post(ApiUrls.GetContribSummary, {
      index: AppData.randomIndex
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getContibSummary();
  }, [])

  return (
    <Wrapper>
      <div className="title">
        <p>Contribution Table</p>
        <p></p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 65%;
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
`

export default ContributionTable;