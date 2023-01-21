import styles from "styled-components"

export const AboutContainer = styles.div`
    height: 100vh;
    display: flex;
    align-items: center;
`

/*.about-left {align-items: start;
    justify-content: center;
    position: relative;
    height: 100%;
    justify-items: start;
    align-content: center;
}*/
export const AboutLeft= styles.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 90%;

    img {
         width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 51%, 0% 0%);
    }
`
// .about-left {
//     flex: 1;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//     height: 100%;
// }
export const AboutRight= styles.div`
 flex: 1;
`
// .about-right {
//     flex: 1;
// }
export const Title = styles.h1`
   font-size: 70px;
    font-weight: 500;
    margin: 20px 50px;
`
// .a-title {
//     font-size: 60px;
//     font-weight: 500;
//     margin: 20px 20px;
// }
export const SubTitle = styles.p`
font-size: 30px;
    font-weight: 500;
    margin: 20px 50px;
`
// .a-sub {
    
// }
export const Description = styles.p`
 width: 80%;
    font-weight: 300;
    margin: 20px 30px;
    align-self: center;
    padding: 5px;
    `

// .a-desc {
//     width: 90%;
//     font-weight: 300;
//     margin: 10px 20px;
//     align-self: center;
//     padding: 20px;
// }

/*.a-card.bg {
  position: absolute;
  top: 70px;
  left: 70px;
  background-color: rgb(71, 70, 70);
}*/

// .a-card {
//     width: 100%;
//     height: 70vh;
//     /*border-radius: 20px;*/
//     position: relative;
//     overflow: hidden;
// }

// .a-img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 51%, 0% 0%);
// }


// @media (max-width:480px) {
//     .about {
//         flex-direction: column;
//         text-align: center;
//         margin-top: 50px;
//     }

//     .about-left {
//         width: 100%;
//     }

//     .a-card {
//         height: 35vh;
//         margin-top: auto;
//     }

//     .about-right {
//         margin: 3px;
//         font-size: x-small;
//     }

//     .a-desc {
//         font-weight: 300;
//         margin: auto;
//         align-self: auto;
//         padding: 5px;
//         font-size: 3vw;
//     }

//     .a-title {
//         font-size: 20px;
//         font-weight: 600;
//         margin: auto;
//         text-align: center;
//     }

//     .a-sub {
//         font-size: 15px;
//         font-weight: 300;
//         margin: auto;
//         text-align: center;
//     }

//     .a-img {
//         width: 100%;
//         height: 40vh;
//         object-fit: cover;
//         clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 51%, 0% 0%);
//     }

// }