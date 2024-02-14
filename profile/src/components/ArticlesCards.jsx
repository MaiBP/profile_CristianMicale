import React from 'react'
import { Articles } from "../Data";
import Article from "./Article";
import { ArticlesSection, Title } from '../Styles/ArticlesCardsStyles';

function ArticlesCards() {
  return (
  <>
      <Title>Entrevistas</Title>
    <ArticlesSection>
      {Articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </ArticlesSection>
    </>
  );
}

export default ArticlesCards