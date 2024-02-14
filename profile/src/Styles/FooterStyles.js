import styled from "styled-components";

export const StyledContact = styled.section`
  padding: 10px 0;
  /* min-height: 100vh;*/
  text-align: center;
border-top: solid #868c96;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .contact-content p {
    text-align: center;
    font-size: 15px;
    margin: 30px 0 60px;
    position: relative;

    &::after {
      background: #353c46;
      bottom: -30px;
      content: "";
      height: 1px;
      left: 50%;
      position: absolute;
      transform: translate(-50%);
      width: 80%;
    }
  }

  // .contact-content h6 {
  //   color: #8b9199;
  //   font-size: 15px;
  //   font-weight: 400;
  //   margin-bottom: 10px;
  // }

  // .contact-content span {
  //   color: #353c47;
  //   margin: 0 10px;
  // }

  .contact-social {
    
    margin-top: 20px;
  }

  .contact-social > ul {
    display: inline-flex;
  }

  .contact-social ul li a {
   
    color: #8b9199;
    display: inline-block;
    height: 40px;
    margin: 0 10px;
   
    transition: all 0.4s ease 0s;
    width: 40px;

    .icon {
      height: 30px;
      width: 30px;

    }
    
    &:hover {
      #fab702;
      color: #33D7FF;
    }
  }

  // .contact-content img {
  //   max-width: 210px;
  // }

  &,
  footer {
    background: #1a1e25;
    color: #868c96;
    p {
      padding: 20px 0;
    }
    a {
      &:hover {
        color: #fab702;
      }
    }
  }
`;
