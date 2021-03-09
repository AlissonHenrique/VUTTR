import styled from "styled-components";

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
