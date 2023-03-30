import styled from "styled-components";
import Chart from 'react-apexcharts';
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import AppContext from "../../context/context";
import { ApiUrls } from "../../config/APIConfig";

const Prediction = () => {

  const AppData = useContext(AppContext);

  const [series, setSeries] = useState([0, 0]);
  const options = {
    colors: ['#3768CE', '#FF8B20'],
    legend: {
      show: false,
    },
  };

  const getPrediction = async () => {
    await axios.post(ApiUrls.GetPrediction, {
      index: AppData.randomIndex
    })
      .then(res => {
        console.log([res.data.prediction.probability[0] * 100, res.data.prediction.probability[1] * 100]);
        setSeries([Number((res.data.prediction.probability[0] * 100).toFixed(2)), Number((res.data.prediction.probability[1] * 100).toFixed(2))]);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getPrediction();
  }, [AppData.randomIndex])

  return (
    <Wrapper>
      <div className="title">
        <p>Prediction</p>
        <p>Project 64</p>
      </div>

      <table>
        <tr>
          <th>
            Name
          </th>
          <th>
            Probability
          </th>
        </tr>

        <tr>
          <td>Sucess</td>
          <td>
            {
              series[0]
            }%
          </td>
        </tr>
        <tr>
          <td>
            Failure
          </td>
          <td>
            {
              series[1]
            }%
          </td>
        </tr>
      </table>
      <div className="chart">
        <Chart options={options} series={series} type="donut" height={300} width={300} />
      </div>

      <div className="marks">
        <div>
          <svg width="20" height="20">
            <rect width="20" height="20" style={{ fill: '#FF8B20' }} />
          </svg>
          {
            series[0]
          }
        </div>
        <div>
          <svg width="20" height="20">
            <rect width="20" height="20" style={{ fill: '#3768CE' }} />
          </svg>
          {
            series[1]
          }
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 35%;
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

  td, th {
    text-align: left;
    padding: 2px 10px
  }

  th {
    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: ${p => p.theme.fontColor2};
  }

  td {
    font-family: 'Inter-Regular';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: '#7D7D7D';
  }

  .chart {
    display: flex;
    justify-content: flex-end;
  }

  .marks {
    div {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 5px;
    }
  }
`

export default Prediction;