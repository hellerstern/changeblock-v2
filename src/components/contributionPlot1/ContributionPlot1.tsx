import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import Chart from 'react-apexcharts';
import axios from "axios";
import AppContext from "../../context/context";
import { ApiUrls } from "../../config/APIConfig";
import Loading from "../loading/Loading";

const ContributionPlot1 = () => {

  const AppData = useContext(AppContext);

  const [reason, setReason] = useState([]);
  const [effect, setEffect] = useState([]);

  const getData = async () => {
    await axios.post(ApiUrls.GetContribSummary, {
      index: AppData.randomIndex
    })
      .then(response => {
        let reason = response.data.data.Reason;
        let effect = response.data.data.Effect;
        for (let i = 0; i < reason.length; i++) {
          reason[i] = reason[i].split('=')[0].trim();
        }
        for (let i = 0; i < effect.length; i++) {
          effect[i] = Number(effect[i].replace('%', '')) < 0 ? 0 : Number(effect[i].replace('%', ''));
        }
        setReason(reason);
        setEffect(effect);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const options = {
    chart: {
      id: 'contribution',
      horizontalAlign: 'left',
      toolbar: {
        show: false,
      }
    },
    legend: {
      show: false,
    },
    plotOptions: {
      position: '',
      bar: {
        horizontal: true,
        barHeight: '50%',
        colors: {
          ranges: [
            {
              from: 0,
              to: 10000,
              color: '#9BB3E6'
            }
          ]
        }
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: reason
    },
  };
  const series = [{
    name: 'series',
    data: effect,
  }];

  useEffect(() => {
    getData();
  }, [AppData.randomIndex])



  return (
    <Wrapper>
      <div className="title">
        <p>Contribution Plot</p>
        <p></p>
      </div>
      {
        reason.length !== 0 ? (
          <Chart options={options} series={series} type="bar" width={'100%'} height={'100%'} />
        ) : (
          <div className="loading">
            <Loading></Loading>
          </div >
        )
      }
    </Wrapper >
  )
}

const Wrapper = styled.div`
  background-color: white;
  min-height: 200px;
  padding: 20px;
  border-radius: 8px;
  width: 64%;
  position: relative;
  .loading {
    position: absolute;
    top: 50%;
    left: calc(50% - 40px);
  }
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
export default ContributionPlot1;