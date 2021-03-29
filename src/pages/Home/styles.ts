import styled from "styled-components";
import IconSearch from "../../assets/icon-search.svg";

export const Form = styled.form`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media (max-width: 385px) {
    width: 100%;
  }
  .container-checkbox {
    margin-left: 16px;
    width: 340px;
    @media (max-width: 807px) {
      margin: 16px 0;
    }
    input[type="checkbox"] {
      position: absolute;
      cursor: pointer;
      z-index: 1;
      width: 15px;
      height: 15px;
      opacity: 0;
      margin-top: 4px;
    }
    input[type="checkbox"] + label {
      position: relative;
      cursor: pointer;
      padding-left: 26px;
      color: #170c3a;
    }
    input[type="checkbox"] + label::before {
      content: "";
      position: absolute;
      width: 13px;
      height: 13px;
      left: 0;
      background: #f5f4f6;
      border: 1px solid #dedce1;
      border-radius: 2px;
      margin-top: 4px;
    }
    input[type="checkbox"]:checked + label::before {
      background-color: #365df0;
      border: 1px solid#365df0;
    }
    > input[type="checkbox"]:checked + label::after {
      content: "";
      position: absolute;
      left: 4px;
      top: 4px;
      width: 5px;
      height: 10px;
      border: solid white;

      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

export const Container = styled.div`
  max-width: 992px;
  margin: 42px auto 0 auto;

  @media (max-width: 1100px) {
    margin: 42px 16px 0 16px;
  }
  h1 {
    font-size: 42px;
    font-weight: 600;
    letter-spacing: 0.84px;
  }
  h4 {
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.6px;
    margin-bottom: 16px;
  }
  .box-search {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    input[type="text"] {
      border: 1px solid #ebeaed;
      border-radius: 5px;
      height: 50px;
      font-size: 20px;
      color: #b1adb9;
      padding: 13px 21px 13px 55px;
      background: url(${IconSearch}) no-repeat #f5f4f6;
      background-size: 20px;
      background-position: 16px;
      width: 100%;
      max-width: 403px;
      &:focus {
        background: url(${IconSearch}) no-repeat #ebeaed;
        background-size: 20px;
        background-position: 16px;
        border: 1px solid #dedce1;
        border-radius: 5px;
        color: #8f8a9b;
      }
    }
  }
`;
