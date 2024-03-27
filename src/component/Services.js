import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  margin-left: 20px;
  margin-right: 5px;
  @media (min-width: 992px) {
    margin-left: 40px;
  }
  @media (min-width: 1200px) {
    margin-left: 60px;
  }
  .wrap {
    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .txt {
      @media (min-width: 992px) {
        margin: 0 9px;
      }
      @media (min-width: 1200px) {
        margin: 0 33px;
      }

      h1 {
        margin-top: -20px;
        opacity: 0.15;
        line-height: 70px;
        font-size: 40px;
      }
      h6 {
        font-size: 24px;
        margin-top: -18px;
        color: rgb(58, 58, 58);
        line-height: 30px;
      }
      h5 {
        font-size: 24px;
        margin-top: -52px;
        color: rgb(58, 58, 58);
        line-height: 30px;
      }
      p {
        margin-top: -20px;
        font-size: 13px;
        line-height: 27px;
        @media (min-width: 992px) {
          width: 395px;
        }
        @media (min-width: 1200px) {
          width: 564px;
          /* font-size: 10px; */

    /* font-family: Avenir-demi; */
        }
      }
    }
    .divz {
      @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
      }
      @media (min-width: 992px) {
        gap: 4%;
        justify-content: center;
      }

      .div-inner {
        background: #000;
        padding: 2px 2px 1px 13px;
        width: 50%;
        @media (min-width: 768px) {
          padding: 33px 2px 1px 14px;
          width: 28%;
        }
        @media (min-width: 992px) {
          padding: 16px 6px 0px 27px;
          width: 35%;
        }

        h1 {
          color: transparent;
        }
        p {
          color: #fff;
        }
      }
      .div-inner-2 {
        background: #000;
        padding: 2px 2px 1px 13px;
        width: 50%;
        margin-top: 5%;
        @media (min-width: 768px) {
          padding: 33px 2px 1px 14px;
          width: 28%;
        }
        @media (min-width: 992px) {
          
    min-width: 140px;
    max-width: 170px;
    transform: translateY(30px);

        }
        @media (min-width: 1200px) {
          padding: 0px 30px 8px 15px;
        }

        h1 {
          color: transparent;
        }
        p {
          color: #fff;
        }
      }
      .div-inner-3 {
        margin-top: 5%;
        background: #000;
        padding: 2px 2px 1px 13px;
        width: 50%;
        @media (min-width: 768px) {
          padding: 33px 2px 1px 14px;
          width: 28%;
        }
        @media (min-width: 992px) {
          width: 25%;
          margin-top: 3%;
        }

        h1 {
          color: transparent;
        }
        p {
          color: #fff;
        }
      }
      .div-inner-4 {
        margin-top: 5%;
        background: #000;
        padding: 2px 2px 1px 13px;
        width: 50%;
        @media (min-width: 768px) {
          padding: 33px 2px 1px 14px;
          width: 28%;
        }
        @media (min-width: 992px) {
          min-width: 140px;
    max-width: 170px;
    transform: translateY(30px);
        }

        h1 {
          color: transparent;
        }
        h1 {
          color: transparent;
        }
        p {
          color: #fff;
        }
      }
      @media (min-width: 992px) {
        .div {
          width: 30%;
          padding: 10% 5% 6% 5%;
        }
      }
      @media (min-width: 1200px) {
        .div {
          min-width: 140px;
    max-width: 170px;
    padding: 20px;
    p{
      font-size: 10px;
    letter-spacing: 1.3px;
    font-family: Avenir-demi;
    font-weight: 900;
    }
        }
      }
    }
  }
`;
function Services() {
  return (
    <Wrapper>
      <div className="wrap">
        <div className="txt">
          <h1>DATASETS</h1>
          <h6>What are Datasets? </h6>
          <h5>What are the Benefits of Datasets?</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="divz">
          {/* <div className="div-1"> */}
          <div className="div-inner div">
            <h1>01</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="div-inner-2 div">
            <h1>02</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* </div> */}
          {/* <div className="div-2"> */}
          <div className="div-inner-3 div">
            <h1>03</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="div-inner-4 div">
            <h1>04</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;
