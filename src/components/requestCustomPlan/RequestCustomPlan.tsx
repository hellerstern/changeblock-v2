import styled from "styled-components";
import { useForm } from 'react-hook-form';

import { btn1, input1 } from "../globalStyles/globalStlyles";

interface inter_main {
  title: string,
  desc: string,
}

const RequestCustomPlan = (props: inter_main) => {
  return (
    <Wrapper>
      <p className="title">
        {
          props.title
        }
      </p>

      <p className="desc">
        {
          props.desc
        }
      </p>

      <StyledForm>

        <div>
          <input placeholder="Company name"></input>
          <input placeholder="Email"></input>
        </div>

        <input placeholder="Subject" style={{ marginBottom: '30px' }}></input>

        <br></br>
        <textarea placeholder="Type your message" />

        <button> Send Request </button>
      </StyledForm>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 77px;
  text-align: center;

  max-width: 591px;
  margin: auto;
  margin-top: 200px;
  margin-bottom: 100px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  .title {
    font-family: 'Inter-Medium';
    color: ${p => p.theme.fontColor1};
    font-weight: 600;
    font-size: 52px;
    line-height: 60px;
    margin-bottom: 25px;

    @media screen and (max-width: 900px) {
      font-size: 34px;
      line-height: 37px;
    }
  }

  .desc {
    font-family: 'Inter-Medium';
    color: ${p => p.theme.fontColor1};
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    margin-bottom: 90px;
  }
`;

const StyledForm = styled.div`
  @media screen and (max-width: 900px) {
    width: 98%;
  }
  margin: auto;


  input, textarea {
    ${input1}
    width: 100%;
    margin-bottom: 0px;

    @media screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
  
  textarea {
    height: 200px;
    resize: vertical;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    @media screen and (max-width: 768px) {
      gap: 10px;
    }
  }

  button {
    ${btn1}
    float: right;
  }
`

export default RequestCustomPlan;