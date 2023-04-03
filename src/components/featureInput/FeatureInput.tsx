import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { ApiUrls } from "../../config/APIConfig";
import AppContext from "../../context/context";

const FeatureInput = () => {

  const AppData = useContext(AppContext);
  // const [featureInput, setFeatureInput] = useState<any>({});

  async function getFeatureInput() {
    await axios.post(ApiUrls.GetFeaturesInput, { index: AppData.randomIndex })
      .then(res => {
        AppData.setFeatureInput(res.data.features);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    getFeatureInput();
  }, [AppData.randomIndex]);

  const data = ([
    {
      title: 'Project Description',
      ph: 'Amazon Forest',
      key: 'Project Description',
    },
    {
      title: 'Methodology',
      ph: 'Quantitative',
      key: 'Methodology',
    },
    {
      title: 'Capital Cost',
      ph: '0.0000',
      key: 'Capital Cost',
    },
    {
      title: 'Project Specific Risk',
      ph: 'Low',
      key: 'Project-specific risk',
    },
    {
      title: 'Country',
      ph: 'Brazil',
      key: 'Country',
    },
    {
      title: 'Region',
      ph: 'Amazonas',
      key: 'Region'
    },
    {
      title: 'Long-Term Forecast',
      ph: '0.0000',
      key: 'Long-term Forecast',
    },
    {
      title: 'Start Year',
      ph: 'Margin',
      key: 'Start Year',
    },
    {
      title: 'Margin',
      ph: '0.0000',
      key: 'Margin'
    },
    {
      title: 'Additionality',
      ph: '0.0000',
      key: 'Additionality'
    },
    {
      title: 'Over Crediting',
      ph: '0.0000',
      key: 'Over-crediting',
    },
    {
      title: 'Leakage',
      ph: '0.0000',
      key: 'Leakage'
    },
    {
      title: 'Non-Permanence',
      ph: 'Low',
      key: 'Non-permanence',
    },
    {
      title: 'Size',
      ph: '0.0000',
      key: 'Size',
    },
    {
      title: 'Cost',
      ph: '0.0000',
      key: 'Cost',
    },
    {
      title: 'Sector-specific Risk',
      ph: 'Average',
      key: 'Sector-specific risk'
    },
  ]);

  return (
    <Wrapper>
      <p className="title">Feature Input</p>
      <Values>
        {
          data.map((item, index) => (
            <Value key={index}>
              <p>{item.title}</p>
              <input value={AppData.featureInput[item.key]} type='number' onChange={(e) => AppData.setFeatureInput({...AppData.featureInput, [item.key] : AppData.featureInput !== null ? e.target.value : 0})}></input>
            </Value>
          ))
        }
      </Values>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 25px;
  background: #FFFFFF;
  border-radius: 8px;
  margin-top: 20px;
  .title {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.themeColor};
    margin-bottom: 20px;
  }
`
const Values = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`
const Value = styled.div`
  p {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${p => p.theme.fontColor2};
    margin-bottom: 3px;
  }
  input {
    outline: 0;
    border: 1px solid #D4D5D6;
    border-radius: 4px;
    padding: 10px;
    width: 160px;
    
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${p => p.theme.fontColor2};
  }
`

export default FeatureInput;