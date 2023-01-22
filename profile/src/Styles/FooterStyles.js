
import styled from 'styled-components';
// import LinkedIn from "../assets/img/social/linkedin.svg";


export const FooterContainer = styled.footer`
  position: relative;
  // width: 100%;
  min-height: 100px;
  padding: 10px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 255, 206, 1) 100%
  );

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;


export const SocialIcon = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
`;

export const SocialIconItem = styled.li`
  list-style: none;
`;


export const SocialIconLink = styled.a`
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Menu = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  `

  export const MenuItem = styled.li`
    list-style: none;
  `;

   export const MenuLink = styled.a`
     font-size: 1.2rem;
     color: #fff;
     margin: 0 10px;
     display: inline-block;
     transition: 0.5s;
     text-decoration: none;
     opacity: 0.75;
     font-weight: 300;

     &hover {
       opacity: 1;
     }
   `;
  //  export const SocialSvg = styled.svg`
   
  //  `