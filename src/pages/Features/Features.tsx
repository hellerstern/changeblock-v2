import styled from "styled-components";

import {
  ImgFeatureBack,
  ImgAna1,
  ImgAna2,
  ImgAna3,
  ImgAna4,
  ImgAnaCheck1,
  ImgAnaCheck2,
  ImgAnaCheck3,
  ImgAnaCheck4
} from '../../assets/images';
import Informed from "../../components/informed/Informed";
import Header from "../../Layout/Header/Header";

interface inter_wrapper {
  bgImg: string
}

const Features = () => {

  const data = [
    {
      title: 'What-If Analysis Tool',
      img: ImgAna1,
      subImg: ImgAnaCheck1,
      desc: [
        'Boost confidence levels',
        'Assess risk of success or failure',
        'Analyze past and similar projects to compare results and outcomes'
      ]
    },
    {
      title: 'Information Extraction Tool',
      img: ImgAna2,
      subImg: ImgAnaCheck2,
      desc: [
        'Extract key information from documents fast',
        'Identify entities, relationships and other relevant data',
        'Convert information into structured forms for further analysis'
      ]
    },
    {
      title: 'Summarization',
      img: ImgAna3,
      subImg: ImgAnaCheck3,
      desc: [
        'Using advanced algorithms to extract the most relevant information',
        'Condense content and identify key phrases',
        'Allow users to quickly and accurately obtain an overview of text materials'
      ]
    },
    {
      title: 'Entity Extraction',
      img: ImgAna4,
      subImg: ImgAnaCheck4,
      desc: [
        'Provides an aggregate sentiment score for each aspect of data',
        'Provides an in-depth understanding of the sentiment associated with different aspects',
        'Allows users to identify trends and opportunities'
      ]
    },
  ]

  return (
    <Wrapper>
      <Container>
        <Header themeFlag={1} />
      </Container>
      <First bgImg={ImgFeatureBack}>
        <p className="title">
          Make smart business decisions with Insight X
        </p>
        <p className="desc">
          Our tool helps you unlock the power of climate data and make data-driven decisions with consident
        </p>
      </First>

      <Tools>
        {
          data.map((item, index) => (
            <Tool key={index}>
              <p className="title">{item.title}</p>
              <div className="sub-tools">
                <img src={item.img} className='main-img'></img>
                <div className="sub-tool">
                  {
                    item.desc.map((dItem, dIndex) => (
                      <div key={dIndex}>
                        <img src={item.subImg}></img>
                        <p>{dItem}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </Tool>
          ))
        }
      </Tools>

      <Informed></Informed>
    </Wrapper>
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

  .desc {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-top: 50px;
    width: 763px;
    margin: auto;
    @media screen and (max-width: 830px) {
      width: 90%;
      font-size: 20px;
    }
  }
`

const Tools = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: auto;
  padding: 50px;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`

const Tool = styled.div`

  margin-bottom: 190px;
  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }

  .title {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: ${p => p.theme.fontColor1};
    margin-bottom: 35px;
    @media screen and (max-width: 768px) {
      font-size: 30px;
      line-height: 35px;
    }
  }
  .sub-tools {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 55px;

    @media screen and (max-width: 1024px) {
      .main-img {
        display: none;
      }
    }
  }

  .sub-tool {
    display: flex;
    flex-direction: column;
    gap: 45px;
    div {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 25px;

      p {
        font-family: 'Inter-Medium';
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color: ${p => p.theme.fontColor2};

        @media screen and (max-width: 500px) {
          font-size: 15px;
          line-height: 20px;
        }
      }
    }
  }
`

export default Features;