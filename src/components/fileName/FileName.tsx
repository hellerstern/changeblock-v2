import styled from "styled-components";
import { useContext } from "react";
import AppContext from "../../context/context";

import {
  ImgDocu,
} from '../../assets/images';

const FileName = () => {

  const AppData = useContext(AppContext);

  return (
    <Wrapper>
      <Container>
        <div >
          <img src={ImgDocu}></img>
          <p>
            {AppData.fileName}
          </p>
        </div>
      </Container>
      <button>
        Cancel
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  button {
    float: right;
    background: #FFFFFF;
    border: 1px solid #05BE70;
    border-radius: 8px;
    padding: 14px 72px;
    font-size: 16px;
    outline: 0;
    border-radius: 8px;
    font-family: 'Inter-Medium';
    text-decoration: none;
    width: min-content;
    white-space: nowrap;
    margin: 20px;
    cursor: pointer;
  }
`

const Container = styled.div`
  height: 250px;
  background: #EEEEEE;
  border: 1.5px dashed #D4D5D6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    font-family: 'Inter-Medium';
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: ${p => p.theme.fontColor2};
    img {
      margin-bottom: 13px;
    }
  }
`
export default FileName;