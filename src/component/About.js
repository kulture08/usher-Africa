import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`


  .about {
    padding: 20px;

    @media (min-width: 992px) {
      display: flex;
      justify-content: center;
      gap: 10%;
      padding: 117px 1px 19px 18px;
    }
    @media (min-width: 1200px) {
      padding: 150px 15px 160px 166px;
    }
    .left {
      h1 {
        font-size: 800;
        color: #e2e2e2;
        font-size: 40px;
      }
      .pp1 {
        /* width: 598px; */
        line-height: 1.6;
        /* margin-bottom: 5%; */
        color: #545454;
        font-size: 16px;
        @media (min-width: 992px) {
           width: 630px; 
        }
      }
      p {
    
        line-height: 2;
        /* margin-bottom: 5%; */
        color: #545454;
        font-size: 16px;
        @media (min-width: 992px) {
          /* width: 415px; */
        }
      }
      p {
        line-height: 2;
        /* margin-bottom: 5%; */
        color: #545454;
        font-size: 16px;
        @media (min-width: 768px) {
          width: 598px;
        }
      }
      .pp2 {
        line-height: 2;
        margin-top: -2%;
        /* margin-bottom: -1%; */
        color: #545454;
        font-size: 16px;
        @media (min-width: 992px) {
          /* width: 415px; */
        }
        @media (min-width: 1200px) {
          width: 745px;
        }
      }
      .p-3{
        margin-top: -2%;
        @media (min-width: 768px) {
           width: 611px; 
        }
        @media (min-width: 1200px) {
          width: 630px;
        }
        
      }
    }
    .image-text {
      @media (min-width: 992px) {
        position: relative;
      bottom: -100px;
      left: -30px;  
        }
      @media (min-width: 1200px) {
        left: -120px;
        }
      img {
        width:8%;
        margin-top: 8%;
      }
      .inner {
        p {
          letter-spacing: 1px !important;
          font-weight:700;
          font-size:20px;
          line-height: 1.6;
          /* width: 275px; */
          margin-top: 8%;
          @media (min-width: 992px) {
            width: 223px;
          }
          @media (min-width: 1200px) {
            width: 427px;
          }
        }
        .p-ryt{
          font-weight:800;
          font-size:12px;
        }
      }
    }
  }
`;
function About() {
  return (
    <Wrapper>
      <div className="about">
        <div className="left">
          <h1>ABOUT US</h1>
          <p className="pp1">
            DAAS Africa provides agriculture and infrastructure data for the use
            of businesses and governments.
            </p>
            <p  className="pp2">
             We gather and collect data across
            Africa, to assist in evidence-based decision making.
            </p>
            <p className="p-3">
             Our datasets
            allow businesses and governments to utilize data as a decision
            making tool, to achieve more impactful results.
            </p>
          
        </div>

        <div className="image-text">
          <div>
            <img
              src="./DAAS Africa_files/Icon open-double-quote-sans-left.png"
              alt=""
            />
          </div>
          <div className="inner">
            <p>
              “Data is a precious thing and will last longer than the systems
              themselves.”
            </p>
            <p className="p-ryt">Tim Berners-Lee, inventor of the World Wide Web.</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
