import styled from "styled-components";
import IconSearch from "../../assets/icon-search.svg";
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

    .box-inputs {
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
          color: #170c3a;
        }
      }

      .container-checkbox {
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

    flex-wrap: wrap;
    margin-bottom: 12px;
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
  .container-modal {
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
