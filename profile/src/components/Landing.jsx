import React from 'react'
import { LandingContainer, LandingLeft, LandingRight, LandingLeftWrapper, Intro, Name, Title, TitleWrapper, TitleItem, Description, SVG } from '../Styles/LandingStyles'
import profileImg from "../assets/img/profileImg.jpg"


const Landing = () => {
  return (
    <>
      <LandingContainer>
        <LandingLeft>
          <LandingLeftWrapper>
            <Intro>Hello, I'm</Intro>
            <Name> Cristian Roberto Micale</Name>
            <Title>
              <TitleWrapper>
                <TitleItem>Football Coach</TitleItem>
                <TitleItem>Personal Trainer</TitleItem>
                <TitleItem> High Performance Sport</TitleItem>
              </TitleWrapper>
            </Title>
            <Description>
              "I was born in Argentina, of Italian descent, and currently reside in Barcelona. I am passionate about football and sports in general. This passion is reflected in my work."
            </Description>
          </LandingLeftWrapper>
        </LandingLeft>
        <LandingRight>
          <img src={profileImg} alt="cris" className="i-img" />
        </LandingRight>
      </LandingContainer>
    </>
  );
     
  
}

export default Landing