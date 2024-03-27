import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  ul {
  
    margin: 0;
    list-style:none;
        position:absolute;
        width:100%;
        height:90vh;
        background:#fff;
        top:0;
        right:0;
        display:flex;
        transition:all 0.7s ease;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        z-index:1;
        max-width:0;
        overflow:hidden;
        padding: 0px;
    
 @media (min-width: 768px) {
      height: 720px;
    }
    @media (min-width: 992px) {
      /* max-width:none;
           background:transparent;
           flex-direction:row;
           height:unset;
            position:relative;
            margin-right:5%;
            margin: 4% 0px 101px 152px;
            gap: 5%; */
    }
    /* @media (min-width: 1200px) {
      margin: 4% 0px 101px 430px;
    } */
    li {
      list-style: none;
   
      a {
        font-size:20px;
        font-weight:700;
        color:#000;
        text-decoration: none;
        :hover {
          border-bottom: 1px solid red;
        }
      }
    }
  }
  .hamburger {
    padding: 20px 37px 20px 6px;
    position: relative;
    margin-right: 30px;
    transition: all 0.7s ease;
    z-index: 3;
    @media (min-width: 768px) {
      padding: 20px 37px 20px 180px;
    }
    @media (min-width: 992px) {
   
    }
    span {
      width: 30px;
      height: 2px;
      background: #fff;
      position: absolute;
      transition: all 0.7s ease;
      &:before {
        position: absolute;
        content: "";
        background: #fff;
        top: -7px;
        height: 100%;
        width: 100%;
        transition: all 0.7s ease;
      }
      &:after {
        position: absolute;
        content: "";
        background: #fff;
        top: 7px;
        height: 100%;
        width: 100%;
        transition: all 0.7s ease;
      }
    }
  }
  .open {
    outline-color: #000;
    span {
      background: transparent;
      &:after {
        top: 0;
        transform: rotate(-585deg);
        background: #66e0fb;
      }
      &:before {
        top: 0;
        transform: rotate(-495deg);
        background: #66e0fb;
      }
    }
  }
  .change {
    max-width: 100%;

  }
  .wrap{
    display:flex;
    align-items:center;
    justify-content:center;
    img{
      width:20%;
 
     
    }
  }
`;
function Header() {
  const [click, setClick] = useState(false);
  return (
    <Wrapper>
      <div className="wrap">
        <img src="./logo512.png" alt="" />
      </div>

      <div
        className={click ? "hamburger open" : "hamburger"}
        onClick={() => setClick(!click)}
      >
        <span></span>
      </div>
      <ul className={click ? "change" : ""}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Header;
