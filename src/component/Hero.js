import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.6));

  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* height: 100vh; */
  background-color: #f2f2f2;
  text-align: left;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 660px;
  /* height: 94vh; */
  position: relative;
  @media (min-width: 768px) {
    height: 70vh;
  }
  @media (min-width: 992px) {
    height: 50vh;
  }
  @media (min-width: 1200px) {
    height: 100vh;
  }
  .text-img {
     padding: 20px; 
     @media (min-width: 1200px) {
      padding: 100px; 
  }
    .text {
    
      h1 {
        font-size: 50px;
        color: #fff;
        font-weight: 800;
        @media (min-width: 1200px) {
          font-size: 72px;
        }
      }
      .top {
        width: 80%!important;

        font-size: 22px;
        color: #fff;
        margin-top: -10% !important;
        @media (min-width: 768px) {
          margin-top: -5% !important;
        }
      }
    }
    img {
      margin: -8px 30px;
      /* margin:20px 100px; */
      width: 50%;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index:10;
      /* float: right;
    position: relative;
    top: 148px; */
      @media (min-width: 768px) {
        width: 30%;
      }
      @media (min-width: 1200px) {
        width: 15%;
          margin:20px 100px; 
      }
    }
  }
`;
function Hero() {
  return (
    <Wrapper>
      <div className="text-img">
        <div className="text">
          <h1>DaaS AFRICA</h1>
          <p className="top">
            A Data gathering company focused on the agriculture, infrastructure
            and tourism sectors.
          </p>
        </div>
        <div className="image">
          <img src="./DAAS Africa_files/logo.png" alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;
