import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import styled from "styled-components";

import AppContext from '../../context/context';
import { ApiUrls } from '../../config/APIConfig';

import {
  ImgOpenFolder,
} from '../../assets/images';

import { btn1 } from "../globalStyles/globalStlyles";

const FileUploader = () => {

  const uploaderRef = useRef<HTMLInputElement>(null);
  const AppData = useContext(AppContext);

  const func1 = async (e: any) => {
    const formData = new FormData();
    AppData.setLoading1(true);
    formData.append("file", e.target.files[0]);
    await axios.post(ApiUrls.GetNer, formData)
      .then(res => {
        AppData.setData1(res.data.text);
        AppData.setFileName(e.target.files[0].name);
        AppData.setLoading1(false);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const func2 = async (e: any) => {
    const formData = new FormData();
    AppData.setLoading2(true);
    formData.append("file", e.target.files[0]);
    await axios.post(ApiUrls.GetSummary, formData)
      .then(res => {
        AppData.setData2(res.data.text);
        AppData.setFileName(e.target.files[0].name);
        AppData.setLoading2(false);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const func3 = async (e: any) => {
    const formData = new FormData();
    AppData.setLoading3(true);
    formData.append("file", e.target.files[0]);
    await axios.post(ApiUrls.GetNer, formData)
      .then(async res1 => {
        await axios.post('https://chatgpt-analysis.herokuapp.com/sentiment_analysis', {
          'user_content': res1.data.text
        })
          .then(res2 => {
            AppData.setData3OfPDF(res2.data.response);
            let entity = res2.data.response.split(/\n\n/g);
            let result = [];
            for (let i = 0; i < entity.length; i++) {
              if (entity[i] !== '') {
                let splitData = entity[i].split(':');
                result.push(
                  splitData
                )
              }
            }
            AppData.setData3(result);
            AppData.setFileName(e.target.files[0].name);
            AppData.setLoading3(false);
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Wrapper>
      <input
        type="file"
        multiple={false}
        accept="application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={(e) => {
          func1(e);
          func2(e);
          func3(e);
        }}
        style={{ display: "none" }}
        ref={uploaderRef}
      />
      <Nofile>
        <img src={ImgOpenFolder}></img>
        <p className="title">You don't have any document yet</p>
        <button onClick={() => uploaderRef.current?.click()}>Upload document</button>
      </Nofile>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;

  width: 100%;
  top: 30%;
`
const Nofile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${p => p.theme.fontColor2};
    
    margin-top: 17px;
    margin-bottom: 43px;
  }
  button {
    ${btn1}
  }
`

export default FileUploader;