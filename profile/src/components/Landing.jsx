import React from "react";
import {
  LandingContainer,
  LandingLeft,
  LandingRight,
  LandingLeftWrapper,
  Intro,
  Name,
  Title,
  TitleWrapper,
  TitleItem,
  Description,
} from "../Styles/LandingStyles";
import profileImg from "../assets/img/profileImg.png";

const Landing = () => {
  return (
    <>
      <LandingContainer>
        <LandingLeft>
          <LandingLeftWrapper>
            <Intro>
              Hola, soy
              {/* Hello, I'm */}
            </Intro>
            <Name> Cristian Roberto Micale</Name>
            <Title>
              <TitleWrapper>
                <TitleItem>
                  Entrenador fútbol
                  {/* Football Coach */}
                </TitleItem>
                <TitleItem>
                  Entrenador personal
                  {/* Personal Trainer */}
                </TitleItem>
                <TitleItem>
                  Alto rendimiento
                  {/* High Performance Sport */}
                </TitleItem>
              </TitleWrapper>
            </Title>
            <Description>
              Nací en Argentina, descendiente de italianos y actualmente vivo en
              Barcelona. Soy apasionado por el fútbol y el deporte en general.
              Esa pasión se refleja en el día a día de mi trabajo.
              {/* "I was born in Argentina, of Italian descent, and currently reside in Barcelona. I am passionate about football and sports in general. This passion is reflected in my work." */}
            </Description>
          </LandingLeftWrapper>
        </LandingLeft>
        <LandingRight>
          <img src={profileImg} alt="cris" className="i-img" />
        </LandingRight>
      </LandingContainer>
    </>
  );
};

export default Landing;
