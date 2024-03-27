import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
const Wrapper = styled.section`
  padding: 20px;
  .outer {
   
    @media (min-width: 768px) {
      display: flex;
      // justify-content: space-around;
    }
    @media (min-width: 992px) {
      justify-content: space-around;
    }
    @media (min-width: 1200px) {
      justify-content: center;
  
    }

    .lft {
      @media (min-width: 1200px) {
        margin: 0 0 0 -220px;
  
    }

      h1 {
        text-transform: uppercase;
        opacity: 0.15;
        line-height: 70px;
        font-size: 40px;
        margin: 10px 0px;

        @media (min-width: 768px) {
          width: 350px;
        }
        @media (min-width: 992px) {
          font-size: 48px;
        }
      }
      .d-1 {
        .p1 {
          text-transform: uppercase;

          font-size: 16px;
          margin-top: 20px;
        }
        .p2 {
          font-weight:800;
          font-size: 18px;
        }
      }
      .d-2 {
        .p3 {
          text-transform: uppercase;
        font-size: 16px;
          margin-top: 50px;
        }
        .p5{
font-weight:800;
font-size:20px;
        }
       
      }
      .d-3 {
        @media (min-width: 768px) {
          /* display: flex;
          justify-content: flex-start;
          gap: 5%; */
          a {
            font-size: 40px;
          }
        }
        .links{
                 
    display: flex;
          gap: 5%;
          @media (min-width: 768px) {

    justify-content: flex-start;
        }
        span{
          font-weight:700;
          font-size:20px;
        }
      }
    }
    }
    .ryt {
      @media (min-width: 992px) {
        margin: 0 100px;
        }
      @media (min-width: 1200px) {
        margin: 0 0 0 300px;
        }
  
      h3{
        font-size:40px;
      }
      .form {
        display: flex;
        justify-content: center;
        flex-direction: column;

        .name-input {
          font-weight: 700;
        color: #000;
        border: none;
        padding: 5%;
        font-size: 16px;
       
        width: 90%;
        height: 35px;
        background-color: #f5f5f6;
        &:focus {
      outline: none;
      border-color: black;
      &::placeholder {
        transform: translateY(-19px);
        font-size: 12px;
        color: black;
      }
    }
 
    &::placeholder {
      transition: all 0.3s ease;
    }

          @media (min-width: 768px) {
            width: 122%;
          }
          @media (min-width: 1200px) {
            width: 166%;
          }
        }
        .email-input {
          background-color: #f5f5f6;
        font-weight: 700;
        color: #000;
        margin-top: 10%;
        padding: 5%;
        font-size: 16px;
        border: none;
        border-radius: 4px;
     
        width: 90%;
        height: 35px;
        &:focus {
      outline: none;
      border-color: black;
      &::placeholder {
        transform: translateY(-19px);
        font-size: 12px;
        color: black;
      }
    }
 
    &::placeholder {
      transition: all 0.3s ease;
    }

          @media (min-width: 768px) {
            width: 122%;
          }
         
          @media (min-width: 1200px) {
            width: 166%;
          }
        
        } 

.textfield{
  width: 100%;

}
button{ 
  
  display: flex;
  justify-content:center;
  margin-top:50px;
  width:100%;
  background: black;
  border: none;
  @media (min-width: 768px) {
    width: 134%;
        }
  @media (min-width: 992px) {
    width: 130%;
        }
  @media (min-width: 1200px) {
    width: 100%;
    position: relative;
    right: -221px;
    top: -22px;
        }
}
        .span{
          border-radius: 5px;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          padding: 10px;
          border: none;
          @media (min-width: 768px) {
            width: 262px;
          }
          @media (min-width: 1200px) {
            width: 100%;
          }
        }
        .messej-input {
          background-color: #f5f5f6;
        font-weight: 700;
        color: #000;
        margin-top: 5%;
        padding: 20px 0 78px 20px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        height: 35px;
        &:focus {
      outline: none;
      border-color: black;
      &::placeholder {
        transform: translateY(-19px);
        font-size: 12px;
        color: black;
      }
    }
 
    &::placeholder {
      transition: all 0.3s ease;
    }

          @media (min-width: 768px) {
            width: 126%;
          }
          @media (min-width: 992px) {
      
          }
          @media (min-width: 1200px) {
            width: 170%;
          }
        }
      }
    }
  }

`;
function Contact() {
  return (
    <Wrapper>
      <div className="outer">
        <div className="lft">
          <h1>GET IN TOUCH</h1>
          <div className="d-1">
            <p className="p1">PHONE</p>
            <p className="p2">+44 217-412-5060</p>
          </div>
          <div className="d-2">
            <p className="p3">CONTACT US VIA EMAIL</p>
            <p className="p5">info@daasafrica.com</p>
          </div>
          <div className="d-3">
            <div>
              <p>FOLLOW US</p>
            </div>
            <div className="links">
              <span>LinkedIn</span>
              <span>Facebook</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>
        <div className="ryt">
          <h3>Fill in the form…</h3>
          <div className="form">
           

            <input className="name-input" type="name" placeholder="Name" />
            <input className="email-input" type="email" placeholder="Email" />
            <input
              className="messej-input"
              type="messej"
              placeholder="Message"
            />
           <button className="button">
              <span className="span">submit Message</span>
            </button>  
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
