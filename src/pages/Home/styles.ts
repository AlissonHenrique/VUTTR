import styled from "styled-components";

export const Container = styled.div`
  max-width: 992px;
  margin: 42px auto 0 auto;
  h1 {
    font-size: 42px;
    font-weight: 600;
    letter-spacing: 0.84px;
  }
  h4 {
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.6px;
  }
  .box-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
    .box-inputs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      input[type="text"] {
        background: #f5f4f6 0% 0% no-repeat;
        border: 1px solid #ebeaed;
        border-radius: 5px;
        width: 403px;
        height: 50px;
        font-size: 20px;
        color: #b1adb9;
        padding: 13px 21px;
        margin-right: 16px;
      }
      input[type="text"]:focus {
        background: #ebeaed 0% 0% no-repeat padding-box;
        border: 1px solid #dedce1;
        border-radius: 5px;
        color: #170c3a;
      }
    }
  }
`;
export const Card = styled.div`
  background: #ffffff 0% 0% no-repeat;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  padding: 32px;
  margin-bottom: 32px;
  span {
    font-weight: 600;
    display: block;
    margin-top: 32px;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    button {
      width: 174px;
      background: #f95e5a 0% 0% no-repeat padding-box;
      border-radius: 5px;
      border: 0;
      text-align: center;
      font-size: 18px;
      letter-spacing: 0.36px;
      color: #ffffff;
      padding: 14px 23px;
      transition: background-color 0.2s;
      &:hover {
        background: #cc4c4c 0% 0% no-repeat;
      }
      &:active {
        background: #a53f3f 0% 0% no-repeat;
      }
    }
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background: #170c3ae6 0% 0% no-repeat padding-box;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 10;
  overflow-y: hidden;
  @media (max-width: 1920px) {
    height: 1090px;
  }
  -modal {
    max-width: 600px;

    background: #ffffff 0% 0% no-repeat;
    box-shadow: 0px 20px 25px #0000001a;
    border-radius: 5px;
    margin: 10% auto 0 auto;
    padding: 30px;

    p {
      margin: 0 0 30px 0;
      color: #8f8a9b;
      font-size: 20px;
    }
  }
  .header-modal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      font-size: 26px;
    }
    svg {
      cursor: pointer;
    }
    margin-bottom: 32px;
  }
  .content-buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      margin-left: 30px;
    }
  }
  .content-inpt {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    label {
      text-align: left;
      font: normal normal 600 20px/26px Source Sans Pro;
      letter-spacing: 0.4px;
      color: #170c3a;
      margin-bottom: 20px;
    }
    input {
      height: 50px;
      padding: 13px 21px;
      background: #f5f4f6 0% 0% no-repeat padding-box;
      border: 1px solid #ebeaed;
      border-radius: 5px;
      &:focus {
        background: #ebeaed 0% 0% no-repeat padding-box;
        border: 1px solid #dedce1;
        border-radius: 5px;
      }
    }
  }
`;
