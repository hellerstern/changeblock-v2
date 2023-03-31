import { css } from "styled-components";

export const btn1 = css`
  background-color: ${p => p.theme.themeColor};
  color: white;
  padding: 14px 30px;
  border: 0;
  outline: 0;
  border-radius: 8px;
  display: block;
  font-family: 'Inter-Medium';
  text-decoration: none;
  width: min-content;
  white-space: nowrap;
`

export const btn2 = css`
  background-color: white;
  padding: 14px 30px;
  border: 1px solid #ACE9CF;
  color: #4D5054;
  border-radius: 8px;
  display: block;
  font-family: 'Inter-Medium';
  text-decoration: none;
  width: min-content;
  white-space: nowrap;
`

export const input1 = css`
  border: 1.5px solid #D4D5D6;
  border-radius: 8px;
  padding: 16px;
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 20px;
  outline: 0;
  color: ${p => p.theme.fontColor2};
  transition: all .3s;
  &:focus {
    border-color: ${p => p.theme.themeColor};
  }
`