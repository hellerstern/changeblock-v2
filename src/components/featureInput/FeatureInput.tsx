import styled from "styled-components";
import { btn1 } from "../globalStyles/globalStlyles";
const FeatureInput = () => {

  const data = [
    {
      title: 'Project Description',
      ph: 'Amazon Forest',
    },
    {
      title: 'Methodology',
      ph: 'Quantitative',
    },
    {
      title: 'Capital Cost',
      ph: '0.0000',
    },
    {
      title: 'Project Specific Risk',
      ph: 'Low',
    },
    {
      title: 'Country',
      ph: 'Brazil',
    },
    {
      title: 'Region',
      ph: 'Amazonas',
    },
    {
      title: 'Long-Term Forecast',
      ph: '0.0000',
    },
    {
      title: 'Start Year',
      ph: 'Margin',
    },
    {
      title: 'Margin',
      ph: '0.0000',
    },
    {
      title: 'Additionality',
      ph: '0.0000',
    },
    {
      title: 'Over Crediting',
      ph: '0.0000',
    },
    {
      title: 'Leakage',
      ph: '0.0000',
    },
    {
      title: 'Non-Permanence',
      ph: 'Low',
    },
    {
      title: 'Size',
      ph: '0.0000',
    },
    {
      title: 'Cost',
      ph: '0.0000',
    },
    {
      title: 'Sector-specific Risk',
      ph: 'Average',
    },
  ]

  return (
    <Wrapper>
      <p className="title">Feature Input</p>
      <Values>
        {
          data.map((item, index) => (
            <Value key={index}>
              <p>{item.title}</p>
              <input placeholder={item.ph}></input>
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
  margin: 20px 0;
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