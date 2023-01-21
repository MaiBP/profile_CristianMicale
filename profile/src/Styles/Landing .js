import styles, {keyframes} from "styled-components"

export const LandingContainer = styles.div`
    display: flex;
    height: 100vh
   
@media (max-width:480px) {
    flex-direction: column;
  }
`
export const LandingLeft = styles.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content:center;

    @media (max-width:480px) {
    padding: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
     }
`
export const LandingRight = styles.div`
    flex: 1;
    position: relative;
    
    img {
    width: 100%;
    height: 100%;
    object-fit:cover;
    // position: absolute;
    clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0 49%, 25% 0%);

    @media (max-width:480px) {
    width: 100%;
    height: 40vh;
    object-fit:cover;
    position: absolute;
    clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0 49%, 25% 0%);
    }

    }
`

export const Description = styles.p`
 @media (max-width:480px) {
    padding: 5px;
    font-size: 3vw;
    text-align: center
 }
`
export const LandingLeftWrapper = styles.div`
 padding: 50px;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;



export const Intro = styles.h2`
 font-size: 50px;
 font-weight:300;

`

export const Name = styles.h2`
font-size: 80px;

`


export const Title = styles.div`
 height: 50px;
 overflow: hidden;
 
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

 height: 100%;
 animation: ${move} 10s ease-in-out infinite alternate;
`;

export const TitleItem = styles.div`
// height: auto;

 height: 60px;
    font-size:25px;
    font-weight:bold;
    color: #24d800;
    display:flex;
    align-items: left;
   
`;


export const SVG = styles.svg`
 width: 30px;
  height: 30px;
  position: absolute;
  bottom: 20px;
`
