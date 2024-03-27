import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  padding: 20px;
  @media (min-width: 992px) {
    padding: 0px;
    }
  .inner {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (min-width: 992px) {
      margin: 100px -11px 180px 93px;
    }
    @media (min-width: 12000px) {
      margin: 70px -11px 150px 93px;
    }

    .txt {
      h1 {
        text-transform: uppercase;
        opacity: 0.15;
        line-height: 70px;
        font-size: 45px;
        color: rgb(58, 58, 58);
        font-weight: 700;
      }
      .h-1 {
        margin-top: -28px;
        color: rgb(58, 58, 58);

        font-size: 24px;
        font-weight: 700;
      }
      .h-2 {
        margin-top: 20px;
        color: rgb(58, 58, 58);

        font-size: 24px;
        font-weight: 700;
      }
      p {
        color: rgb(58, 58, 58);
        margin-bottom: 30px;
        font-size: 15px;
        line-height: 30px;
      }
      .p-1 {
        color: rgb(58, 58, 58);
        font-size: 15px;
        line-height: 30px;
        margin-top: -50px;
      }
      .p-2 {
        color: rgb(58, 58, 58);
        font-size: 15px;
        line-height: 30px;
        margin-top: -45px;
        @media (min-width: 1200px) {
          width:500px;
    } 
      }
      .p-3 {
        font-size: 24px;
        font-weight: 700;
        color: rgb(58, 58, 58);
        line-height: 25px;
        margin-top: 10px;
      }
      .p-4 {
        color: rgb(58, 58, 58);
        margin-top: -50px;
        font-size: 15px;
        line-height: 30px;
        @media (min-width: 1200px) {
          width:500px;
    } 
      }
    }

    img {
      margin: 20px 0 -84px 0;
      width: 100%;

      @media (min-width: 1200px) {
        width: 80%;
        /* margin: 0 90px; */
       margin-left:130px
      }
    }
  }
`;
function Service() {
  return (
    <Wrapper>
      <div className="inner">
        <div className="txt">
          <h1>SERVICES</h1>
          <h6 className="h-1">Datasets</h6>
          <p className="p-1">Collections of data in different formats</p>
          <h6 className="h-2">Geospatial Market Maps</h6>
          <p className="p-2">
            Combine the benefits of geospatial imagery and market maps to
            identify gaps and opportunities in different sectors.
          </p>
          <h6 className="p-3">Consulting</h6>
          <p className="p-4">
            Hire us to collect data, we can also clean, restructure, sort and
            analyze your existing data
          </p>
        </div>
        <div className="image>">
          <img src="./DAAS Africa_files/62608.png" alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Service;
