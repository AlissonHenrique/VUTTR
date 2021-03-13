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
  font-weight: 600;

  height: 50px;

  transition: background-color 0.2s;
  &.blue {
    background: #365df0;
    &:hover {
      background: #2f55cc;
    }
    &:active {
      background: #244aa8;
    }
  }
  &.blue-2 {
    background: #e1e7fd;
    color: #365df0;
    &:hover {
      background: #cad6fc;
    }
    &:active {
      background: #b9c6fa;
    }
  }
  &.red {
    background: #f95e5a;

    &:hover {
      background: #cc4c4c;
    }
    &:active {
      background: #a53f3f;
    }
  }
  &.red-2 {
    background: #feefee;
    color: #f95e5a;
    &:hover {
      background: #fcd7d6;
    }
    &:active {
      background: #fcc6c5;
    }
  }
`;
