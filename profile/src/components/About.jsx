import {
  AboutContainer,
  AboutLeft,
  AboutRight,
  Title,
  SubTitle,
  Description,
} from "../Styles/AboutStyles";
import Crispic from "../assets/img/aboutImg.png";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutLeft>
          <img src={Crispic} alt="cristianmicale" className="img" />
        </AboutLeft>
        <AboutRight>
          <Title>
            Trayectoria
            {/* My Career */}
          </Title>
          <SubTitle>
            "Disciplina, sacrificio y humildad"
            {/* "With discipline, sacrifice, and humility as my guiding principles,I
            have forged a career in the world of sports." */}
          </SubTitle>
          <Description>
            He tenido la suerte de construir una carrera en el emocionante mundo
            del deporte, guiado por mis principios de disciplina, sacrificio y
            humildad. Como jugador, mi trayectoria comenzó en la escuela de Fren
            y Bochini en el Club Atlético Independiente antes de pasar a Racing
            Club de Avellaneda. Aunque mi tiempo allí fue breve, continué mi
            progreso en el Club Atlético All Boys, donde ascendí a través de las
            filas juveniles e incluso competí en la cuarta división. También
            tuve la increíble oportunidad de vivir una experiencia cultural
            diferente al jugar en México con Cruz Azul Oaxaca. Al regresar a
            casa, seguí jugando al fútbol sala para Yupanqui, Huracán y All
            Boys.
            {/* I've been fortunate enough to build a career in the exciting world
            of sports, guided by my principles of discipline, sacrifice, and
            humility. As a player, my journey began at the school of Fren and
            Bochini at Club Atlético Independiente before I moved on to Racing
            Club de Avellaneda. Although my time there was brief, I continued my
            progress at Club Atlético All Boys, where I worked my way up through
            the youth ranks and even competed in the fourth division. I also had
            the amazing opportunity to experience a different culture by playing
            in Mexico with Cruz Azul Oaxaca. Upon returning home, I continued to
            play futsal for Yupanqui, Huracán, and All Boys. */}
          </Description>
          <Description>
            Como entrenador, he estado involucrado con equipos como Club Unión
            de Pilar y Atlético Pilar en la liga de Escobar, Argentina. Fue en
            Atlético Pilar donde desarrollé mis habilidades y eventualmente me
            convertí en el coordinador general de fútbol, supervisando todos los
            niveles del deporte desde juveniles hasta senior, tanto en hombres
            como en mujeres. También entrené a los equipos juveniles de Real
            Pilar FC y colavore con el primer equipo. Aquí en Barcelona, fui
            responsable de la coordinación y dirección técnica de los equipos
            juveniles como Futbol Club Almeda. En la actualidad, dirijo las
            juveniles preferente del Fontsanta Fatjo"
            {/* As a coach, I've been involved with teams like Club Unión from Pilar and Atlético Pilar in the Escobar league, Argentina. It was in Atlético Pilar where I developed my skills and eventually became the general coordinator of
            football, overseeing all levels of the sport from youth to senior,
            both for men and women. I also coached the youth teams of Real Pilar
            FC and assisted with the senior team. More recently, here in
            Barcelona, I was responsible for coordination and head coaching for
            the youth teams, as well as assisting with the first team at Futbol
            Club Almeda. */}
          </Description>
        </AboutRight>
      </AboutContainer>
    </>
  );
};

export default About;
