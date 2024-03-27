import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  padding: 20px;
  .inner {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (min-width: 1200px) {
      margin: 0 0 70px 0;
    }

    .project-inner {
      @media (min-width: 992px) {
        margin: 0 40px;
      }
      @media (min-width: 1200px) {
        margin: 0 82px;
      }
    }
    img {
      width: 100%;
    }
    .p5 {
      line-height: 2;
      margin-top: -40px;
    }

    .p5 {
      line-height: 2;
      margin-top: -40px;
      @media (min-width: 768px) {
        width: 323px;
      }
      width: 323px;
    }
    .h-1 {
      text-transform: uppercase;
      opacity: 0.15;
      line-height: 2;
      font-size: 40px;
      color: #3a3a3a;
    }
    .h-6 {
      margin-top: -25px;
      font-size: 25px;
      font-weight: 700;

      color: rgb(58, 58, 58);
      line-height: 25px;
      @media (min-width: 768px) {
        width: 390px;
      }
    }
  }
`;
function Projects() {
  return (
    <Wrapper>
      <div className="inner">
        <div className="project-inner">
          <h1 className="h-1">Projects</h1>
          <h6 className="h-6">SADC - Covid 19 Dashboard</h6>
          <p className="p5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex.
          </p>
          <p className="p6">www.coviddashboard.io</p>
        </div>
        <div className="images">
          <img src="./DAAS Africa_files/21382032.png" alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Projects;
