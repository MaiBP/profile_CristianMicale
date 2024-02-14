import styles, {keyframes} from "styled-components"
import breakpoint from "./MediaQ";

export const LandingContainer = styles.div`
   display: flex;
   height: 100vh;

  //    @media only screen and ${breakpoint.device.s} {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  // }


`;
export const LandingLeft = styles.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content:center;

@media only screen and ${breakpoint.device.s} {

 margin: auto;
}
 
@media only screen and ${breakpoint.device.xs} {
 margin: auto;
}
    
`;
export const LandingRight = styles.div`
    flex: 1;
    position: relative;

img {
    width: 100%;
    height: 100%;
    object-fit:cover;
    clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0 49%, 25% 0%);

    @media only screen and ${breakpoint.device.s} {
       
          width: 100%;
          height: 100%;
          
    }

  @media only screen and ${breakpoint.device.xs} {
          width: 100%;
          height: 100%;
    }
   }

      @media only screen and ${breakpoint.device.s} {
      
          position: absolute;
           height: 100vh;
     
          
    }

`;

export const Description = styles.p`
padding: 15px;
font-size: 1.5rem;
text-shadow: 1px 1px 2px grey;

@media only screen and ${breakpoint.device.s} {
  padding: 5px;
  margin: auto;
  font-size: 1rem;
}

 @media only screen and ${breakpoint.device.xs} {
 margin: auto;
 font-size: 1rem;
 }

`;
export const LandingLeftWrapper = styles.div`
    padding: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
   

      @media only screen and ${breakpoint.device.s} {
    padding: 15px;
backdrop-filter: blur(3px);
z-index: 1;
 }
    
    @media only screen and ${breakpoint.device.xs} {
  padding: 10px;
//  height: 100%;

 }
`;



export const Intro = styles.h1`

 font-size: 30px;
 font-weight:200;

 @media only screen and ${breakpoint.device.s} {
  margin: 0 auto;
  text-shadow: 1px 1px 2px grey;
  
 }

 @media only screen and ${breakpoint.device.xs} {
  margin:0 auto;
  
 }


`;

export const Name = styles.h1`
text-shadow: 1px 1px 2px grey;
 font-size: 70px;

 @media only screen and ${breakpoint.device.s} {
 font-size: 40px;
 }
 @media only screen and ${breakpoint.device.xs} {
 font-size: 35px;
 }
`;


export const Title = styles.div`
 height: 30px;
 overflow: hidden;
 
 @media only screen and ${breakpoint.device.xs} {
    height: 20px;
 }
`;

       
const move = keyframes`
25%{
    transform: translateY(-50px);
}
50%{
   transform: translateY(-100px);
} 

75%{ 
    transform: translateY(-150px); 
}
`
export const TitleWrapper = styles.div`
// position: relative;
text-shadow: 1px 1px 2px grey;
 height: 100%;
 animation: ${move} 10s ease-in-out infinite alternate;
`;

export const TitleItem = styles.div`
// height: auto;
// text-shadow: -4px 2px 9px rgba(0, 255, 40, 0.7);
// color: #00ff28;
color: #33D7FF;
text-transform: uppercase;
 height: 60px;
    font-size:1.5rem;
    font-weight:bold;
    // color:#81ff00;
    display:flex;
    align-items: left;

    @media only screen and ${breakpoint.device.xs} {
   font-size: 1rem;
 }
  @media only screen and ${breakpoint.device.s} {
   font-size: 1rem;
 }
`;


