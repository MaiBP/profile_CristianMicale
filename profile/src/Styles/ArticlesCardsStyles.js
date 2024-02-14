import styled from "styled-components";
import breakpoint from "./MediaQ";
export const ArticlesSection = styled.section`
  display: grid;
  max-width: 1000px;
  margin-inline: auto;
  padding-inline: 20px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

  gap: 20px;

  margin: 10px auto;

  @media only screen and ${breakpoint.device.xs} {
    padding-inline: 5px;

    margin: auto;
  }
`;

export const Title = styled.h1`
  font-size: 70px;
  margin: 20px 50px;
  text-align: center;

  @media only screen and ${breakpoint.device.s} {
    font-size: 50px;
  }
`;