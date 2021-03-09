import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  width: 174px;
  border-radius: 5px;
  border: 0;
  text-align: center;
  font-size: 18px;
  letter-spacing: 0.36px;
  color: #ffffff;
  padding: 14px 23px;
  transition: background-color 0.2s;
  &.blue {
    background: #365df0 0% 0%;
    &:hover {
      background: #2f55cc 0% 0%;
    }
    &:active {
      background: #244aa8 0% 0%;
    }
  }
  &.red {
    background: #f95e5a 0% 0%;
    &:hover {
      background: #cc4c4c 0% 0%;
    }
    &:active {
      background: #a53f3f 0% 0%;
    }
  }
`;
