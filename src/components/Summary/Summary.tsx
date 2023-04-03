import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { btn1 } from "../globalStyles/globalStlyles";
import { ApiUrls } from "../../config/APIConfig";
import AppContext from "../../context/context";
import Loading from "../loading/Loading";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../myDocument/MyDocument";
const Summary = () => {

    const AppData = useContext(AppContext);

    const [featureSummary, setFeatureSummary] = useState('');
    const [expertAdvice, getExpertAdvice] = useState('');
    const [loading, setLoading] = useState(0);
    const getFeatureSummary = async() => {
        setLoading(1);
        await axios.post(ApiUrls.GetFeatureSummary, {
            features: AppData.featureInput,
            success: AppData.series[1],
            failure: AppData.series[0],
        })
            .then(async res => {
                let str = res.data.feature_explanation.toString();
                const matches = str.match(/\d+\.\d+/g);
                const rounds = [];
                for (let i = 0; i < matches?.length; i++) {
                    rounds.push(Number(matches[i]).toFixed(1));
                }
                for (let i = 0; i < matches?.length; i++) {
                    str = str.replace(matches[i], rounds[i].toString());
                }
                console.log(str)
                setFeatureSummary(str);

                await axios.post(ApiUrls.GetExpertAdvice, {
                    feature_explanation: str
                }).then(res => {
                    getExpertAdvice(res.data.expert_advise);
                    setLoading(2);
                }).catch(err => {
                    console.log(err);
                })
            })
    }

    return (
        <Wrapper>
            <div className="header">
                <p>Summary of Output</p>
                <button onClick={getFeatureSummary}>Generate Summary</button>
            </div>
            
            {
                loading == 2 && (
                    <div className="main">
                        {
                            featureSummary !== '' && (
                                <p className="title">
                                    Features Explanation
                                </p>
                            )
                        }
                        <p className="content">
                            { featureSummary }
                        </p>

                        {
                            expertAdvice !=='' && (
                                <p className="title">
                                    Expert Advice
                                </p>
                            )
                        }
                        <p className="content">
                            { expertAdvice }
                        </p>
                        <div className="downbtn">
                            <PDFDownloadLink
                                document={<MyDocument data={[featureSummary, "Expert Advice: \n\n" + expertAdvice]} />}
                                fileName="information-extraction.pdf"
                            >
                                Download Summary
                            </PDFDownloadLink>
                        </div>
                    </div>
                )
            }
            {
                loading == 1 && (
                    <div className="loading">
                        <Loading></Loading>
                    </div>
                )
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    padding: 30px 33px;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            font-family: 'Inter-Medium';
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #05BE70;
        }

        button {
            ${btn1}
        }
    }

    .main {
        .title {
            font-family: 'Inter-Medium';
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #4D5054;
        }
        .content {
            margin: 10px 0;
            font-family: 'Inter-Medium';
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #4D5054;
        }

        .downbtn {
            display: flex;
            justify-content: flex-end;
            a {
                ${btn1};
            }
        }
    }

    .loading {
        display: flex;
        justify-content: center;
    }
`
export default Summary;