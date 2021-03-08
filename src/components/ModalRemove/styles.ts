import styled from "styled-components";

export const BgModal = styled.div`
  width: 100%;
  height: 100%;
  background: #170c3ae6 0% 0% no-repeat padding-box;
  position: absolute;
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
      margin: 30px 0;
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
  }
`;
