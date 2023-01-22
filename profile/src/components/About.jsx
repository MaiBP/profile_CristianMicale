
import { AboutContainer, AboutLeft, AboutRight, Title, SubTitle, Description } from "../Styles/AboutStyles";
import Crispic from "../assets/img/aboutImg.png"
const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutLeft>
          <img src={Crispic} alt="cristianmicale" className="a-img" />
        </AboutLeft>
        <AboutRight>
          <Title>My Career</Title>
          <SubTitle>
            "With discipline, sacrifice, and humility as my guiding principles,I
            have forged a career in the world of sports."
          </SubTitle>
          <Description>
            As a player, I began my journey at the school of Fren and Bochini at
            Club Atlético Independiente before moving on to Racing Club de
            Avellaneda. My time there was brief, but I then joined Club Atlético
            All Boys, where I progressed through the youth ranks and even
            competed in the fourth division. I also had the opportunity to
            experience a different culture by playing in Mexico with Cruz Azul Oaxaca. Upon returning to my home country, I played futsal for Yupanqui,
            Huracán, and All Boys. 
          </Description>
          <Description>
            As a coach, I have been involved in Club Unión from the Pilar's City and Atlético Pilar in the Escobar league. In Atlético Pilar, I
            was able to fully develop my skills and eventually become the
            general coordinator of football, overseeing all levels of the sport,
            from youth to senior, both for men and women. I also coached the
            youth teams of Real Pilar FC and assisted with the senior team.
            Here in Barcelona, I was responsible for coordination, head coach for the youth teams and asistant of the first team in  Futbol Club Almeda."
          </Description>
        </AboutRight>
      </AboutContainer>
    </>
  );
};

export default About;
