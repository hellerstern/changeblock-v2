import styled from "styled-components";

interface inter_chatbox {
  heading: any,
  subheading: any,
  popout: any,
  children: any
}

const ChartBox = ({ heading, subheading, popout, children }: inter_chatbox) => {
  return (
    <Wrapper>
      <div className="title">
        <p>Contribution Plot</p>
        <p></p>
      </div>
      <div className='box'>
        <div>{children}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 64%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  height: min-content;

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

export default ChartBox;