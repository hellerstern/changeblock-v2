import { useState } from 'react';
import styled from "styled-components";

import Header from "../../Layout/Header/Header";
import {
  ImgFaqsBack,
} from '../../assets/images';

import { BsChevronDown } from 'react-icons/bs';

interface inter_wrapper {
  bgImg: string
}

interface inter_qst {
  flag: boolean,
}


const Faqs = () => {

  const data = [
    {
      qst: 'What is InsightX and how does it work?',
      ans: 'InsightX is a comprehensive data analysis platform that integrates What-If analysis, information extraction, text summarisation, and aspect-based sentiment analysis to extract valuable insights from complex climate data. It uses advanced deep learning techniques to convert fragmented data into intelligent, actionable information for making key decisions.'
    },
    {
      qst: 'How does InsightX help with climate data analysis?',
      ans: 'InsightX provides a user-friendly interface that helps users analyse complex climate data, providing them with actionable insights and suggestions for making informed decisions about projects, methodologies, project developers and more. It converts data into visualizations and provides a degree of confidence in the estimates.'
    },
    {
      qst: 'Can I try InsightX before I purchase it?  ',
      ans: 'Yes, InsightX offers a free trial for users to test and evaluate the platform before purchasing.'
    },
    {
      qst: 'What technical expertise do I need to use InsightX?',
      ans: 'InsightX has been designed with a user-friendly interface to be accessible to users with a variety of technical backgrounds. However, some understanding of climate data analysis would be beneficial.'
    },
    {
      qst: 'Does InsightX integrate with other tools and systems?',
      ans: "InsightX can be integrated with other tools and systems to support your climate data analysis needs. The platform's API allows for seamless integration, providing you with a comprehensive solution for developers and analysts as well as web users."
    },
    {
      qst: 'What is What If Analysis',
      ans: 'What-If analysis is a type of predictive analysis used to explore the implications of different scenarios and answer "what if" questions such as "what if we increase the budget?'
    },
    {
      qst: 'What is information extraction?',
      ans: 'Information Extraction is the process of extracting structured information from unstructured data, such as text.'
    },
    {
      qst: 'What is text summarisation?',
      ans: 'Text summarisation is the process of automatically creating a summary of a text document.'
    },
    {
      qst: 'What is aspect-based sentiment analysis?',
      ans: 'Aspect-based sentiment analysis is the process of extracting sentiment related to specific aspects of a document, such as product features.'
    },
    {
      qst: 'What types of insights can InsightX generate?',
      ans: 'nsightX can generate a variety of insights, such as the implications of different scenarios, information about specific topics, summaries of texts, and sentiment related to specific aspects.'
    },
    {
      qst: 'What benefits does InsightX provide?',
      ans: 'InsightX provides the ability to quickly and accurately analyse complex climate data and extract valuable insights. This can save time and resources and give the user a better understanding of the data.'
    },
  ]

  const [triggerFlags, setTriggerFlags] = useState(new Array(data.length).fill(false));

  const handleChange = (index: number) => {
    const newArray = [...triggerFlags];
    newArray[index] = !newArray[index];
    setTriggerFlags([...newArray]);
  }

  return (
    <Wrapper>
      <Container>
        <Header themeFlag={1} />
      </Container>
      <First bgImg={ImgFaqsBack}>
        <p className="title">
          Frequently Asked Questions
        </p>
      </First>

      <Qsts>
        {
          data.map((item, index) => (
            <Qst key={index} flag={triggerFlags[index]} onClick={() => handleChange(index)}>
              <div>
                <p className='qst'>
                  {
                    item.qst
                  }
                </p>
                <BsChevronDown />
              </div>

              <div className="ans">
                <p>
                  {
                    item.ans
                  }
                </p>
              </div>
            </Qst>
          ))
        }
      </Qsts>
    </Wrapper >
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Container = styled.div`
  margin: auto;
  max-width: ${p => p.theme.maxWidth};
  background-color: red;
  position: relative;
`

const First = styled.div<inter_wrapper>`
  background-image: url(${p => p.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  right: 0;
  height: 500px;
  width: 100vw;
  z-index: -1;
  color: ${p => p.theme.fontColor3};
  text-align: center;
  .title {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    padding-top: 250px;
    width: 1100px;
    margin: auto;
    @media screen and (max-width: 1100px) {
      width: 90%;
      font-size: 44px;
      line-height: 57px;
    }

    @media screen and (max-width: 580px) {
      font-size: 30px;
      line-height: 37px;
    }
  }
`

const Qsts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 100px;
  gap: 50px;
  max-width: ${p => p.theme.maxWidth};
  padding: 50px;

  @media screen and (max-width: 1510px) {
    gap: 10px;
  }

  @media screen and (max-width: 1460px) {
    width: 100%;
  }

  @media screen and (max-width: 1165px) {
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`

const Qst = styled.div<inter_qst>`
  background: #F0F0F0;
  padding: 32px 16px;
  width: 528px;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      color: ${p => p.theme.fontColor1};
      transition: all .3s;
      transform: ${p => p.flag ? 'rotate(0)' : 'rotate(-90deg)'};
    }
  }

  .qst {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.fontColor1};
    
  }

  transition: all .3s;
  .ans {
    transition: all .3s;
    overflow: hidden;
    max-height: ${p => p.flag ? '150px' : '0'};
    opacity: ${p => p.flag ? 1 : 0};
    p {
      padding-top: 20px;
      font-family: 'Inter-Medium';
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: ${p => p.theme.fontColor1};
      /* margin-top: 20px; */
    }
  }
`

export default Faqs;