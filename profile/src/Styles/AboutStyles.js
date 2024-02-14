import styled from "styled-components"
import breakpoint from "./MediaQ";




export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  // @media only screen and ${breakpoint.device.s} {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  // }
`;


export const AboutLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    // clip-path: polygon(80% 0%, 100% 50%, 80% 100%, 0% 100%, 0 51%, 0% 0%);
  }

  // @media only screen and ${breakpoint.device.s} {
  //   img {
  //     width: 100%;
  //     height: 100%;
  //     object-fit: cover;
  //     // clip-path: none;
  //     clip-path: polygon(80% 0%, 100% 50%, 80% 100%, 0% 100%, 0 51%, 0% 0%);
  //   }
  // }
`;

export const AboutRight = styled.div`
  flex: 1;

  // @media only screen and ${breakpoint.device.s} {
  //   flex: 2;
  // }
`;

export const Title = styled.h1`
 font-size: 70px;
  margin: 20px 50px;

  @media only screen and ${breakpoint.device.s} {
 font-size: 50px;
 margin: 5px;

 }

 @media only screen and ${breakpoint.device.xs} {
 font-size: 50px;
 margin: 10px;
 }

   
`;

export const SubTitle = styled.h1`
font-size: 20px;
margin: 20px 50px;

 @media only screen and ${breakpoint.device.s} {
     font-size:16px;
   margin: 10px;
 }

 @media only screen and ${breakpoint.device.xs} {
     font-size:16px;
     margin: 10px;
 }

   
`;

export const Description = styled.p`
    width: 80%;
    font-weight: 300;
    margin: 20px 30px;
    align-self: center;
    padding: 5px;

 @media only screen and ${breakpoint.device.s} {
    // width: 100%;
    margin: 10px;
    padding: 10px;
     font-size:10px;
} 

  @media only screen and ${breakpoint.device.xs} {
    //  width: auto;
     margin: 10px;
    // padding: 10px;
     font-size:10px;
} 
    

`;