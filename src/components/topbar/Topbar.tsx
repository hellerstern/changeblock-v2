import { useState } from 'react';
import styled from "styled-components";

import WhatIfAnalysis from '../MainFunctions/whatIfAnalysis/WhatIfAnalysis';
import InformationExtraction from '../MainFunctions/informationExtraction/InformationExtraction';
import Submarization from '../MainFunctions/submarization/Submarization';
import AspectBasedSentiment from '../MainFunctions/aspectBasedSentiment/AspectBasedSentiment';

interface inter_topbar {
  flag: number
}

const Topbar = () => {

  const [flagBar, setFlagBar] = useState(1);

  const data = [
    {
      name: 'What-If Analysis',
      component: <WhatIfAnalysis />,
    },
    {
      name: 'Information Extraction',
      component: <InformationExtraction />,
    },
    {
      name: 'Summarization',
      component: <Submarization />,
    },
    {
      name: 'Aspect Based Sentiment',
      component: <AspectBasedSentiment />,
    }
  ]
  return (
    <Wrapper>
      <TopbarDiv flag={flagBar}
      >
        {
          data.map((item, index) => (
            <p key={index} onClick={() => setFlagBar(index + 1)}>
              {
                item.name
              }
            </p>
          ))
        }
      </TopbarDiv>
      {
        data[flagBar - 1].component
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`
const TopbarDiv = styled.div<inter_topbar>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px solid #D4D5D6;
  
  p {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #B8B9BB;
    cursor: pointer;
    padding-bottom: 10px;
  }  

  p:nth-child(${p => p.flag}) {
    color: ${p => p.theme.themeColor};
    font-weight: 600;
    border-bottom: 2px solid ${p => p.theme.themeColors};
  }
`

export default Topbar;