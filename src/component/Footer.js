import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 20px;
  @media (min-width: 1200px) {
    padding: 0px;
  }
  .wrap {

    @media (min-width: 992px) {
      display:flex;
      align-items:center;
      justify-items:center;
    }
  
  }

  ul {
    display: flex;
    gap: 3%;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
   
    @media (min-width: 768px) {
      flex-wrap: nowrap;
    }
    @media (min-width: 992px) {
      margin-right: 200px;
      list-style: none;
    }
    @media (min-width: 1200px) {
      margin-right: 500px;
     
    }

    li {
      @media (min-width: 992px) {
      }

      a {
        font-size: 14px;
        display: block;
        padding: 12px;
        text-decoration: none;
        color: #000;
      }
    }
  }
  img {
    width: 50%;

    height: auto;

    margin: 0px auto;
    display: block;
    object-fit: contain;
    @media (min-width: 768px) {
      width: 20%;
    }
    @media (min-width: 992px) {
      margin-left: 64px;
      width: 70%;
    }
    @media (min-width: 1200px) {
       width:45%;
       margin-left: 90px;
    }
  }
`;
function Footer() {
  return (
    <Wrapper>
      <div className="wrap">
        <div className="imagz">
          <img src="./DAAS Africa_files/logo-dark.png" alt="" />
        </div>

        <ul>
          <li>
            <a href="">ABOUTUS</a>
          </li>
          <li>
            <a href="">Datasets</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">PROJECTS</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Footer;
