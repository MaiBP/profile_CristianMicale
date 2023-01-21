
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
          <Title>Trayectoria</Title>
          <SubTitle>"¡Disciplina, sacrificio y humildad!"</SubTitle>
          <Description>
            Naci en Argentina, decendiente de familia Italiana y vivo en
            Barcelona. Amo el futbol y el deporte en general. La pasion por lo
            que hago se ve reflejado en mi trabajo.
          </Description>
          <Description>
            Como jugador, comencé en la escuela de Fren y Bochini en el Club
            Atlético Independiente, luego pase a Racing Club de Avellaneda, ese
            paso fue breve. Luego al Club Atlético All Boys, donde hice todas
            las inferiores hasta llegar a cuarta división y participar del
            selectivo. Por otro lado, vivi una experiencia en México en el Cruz
            Azul Oaxaca.
          </Description>
          <Description>
            Volví a mi país para jugar en futsal en Yupanqui, Huracán y All
            Boys. Como entrenador, estuve en Unión de Pilar y Atlético Pilar en
            la liga Escobar. En Atletico Pilar me desarrolle plenamente hasta
            llegar a coordinador general de fútbol con mi proyecto de fútbol
            integral, conectaba a todo el fútbol desde escuelita hasta la
            primera, tanto en masculino como femenino. Dirigi en las juveniles
            de Real Pilar FC colaborando tambien con la primera. Hoy, en
            Barcelona estoy a cargo de la coordinacion y dirijo las juveniles
            del Futbol Club Almeda.
          </Description>
        </AboutRight>
      </AboutContainer>
    </>
  );
};

export default About;
