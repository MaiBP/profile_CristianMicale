import styles from "styled-components"

export const AboutContainer = styles.div`
    height: 100vh;
    display: flex;
    align-items: center;

    @media (max-width:480px) {
        flex-direction: column;
        text-align: center;
        margin-top: 50px;
    }

`;


export const AboutLeft = styles.div`
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

     @media (max-width:480px) {
        width: 100%;
        height: 40vh;
        object-fit: cover;
        clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 51%, 0% 0%);
    }
    }

    @media (max-width:480px) {
        width: 100%;
    }
`;

export const AboutRight = styles.div`
 flex: 1;

 @media (max-width:480px) {
        width: 100%;
        margin: 3px;
         font-size: x-small;
    }
`;

export const Title = styles.h1`
   font-size: 70px;
    font-weight: 500;
    margin: 20px 50px;

    @media (max-width:480px) {
        font-size: 20px;
        font-weight: 600;
        margin: auto;
        text-align: center;
    }
`;

export const SubTitle = styles.p`
   font-size: 20px;
    font-weight: 500;
    margin: 20px 20px;

    @media (max-width:480px) {
        font-size: 15px;
        font-weight: 300;
        margin: auto;
        text-align: center;
    }
`;

export const Description = styles.p`
 width: 80%;
    font-weight: 300;
    margin: 10px 50px;
    align-self: center;
    padding: 2px;

     @media (max-width:480px) {
        font-weight: 300;
        margin: auto;
        align-self: auto;
        padding: 5px;
        font-size: 3vw;
    }
  
    `;



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