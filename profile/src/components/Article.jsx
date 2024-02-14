
import { StyledArticle } from "../Styles/ArticleStyles";



const Article = ({ article }) => {
  const { title, imageUrl, text, contentLink } = article;
  return (
    <StyledArticle>
      
      <div className="article-wrapper">
        <figure>
          <img src={imageUrl} alt="" />
        </figure>
        <div className="article-body">
          <h2>{title}</h2>
          <p>
           {text}
          </p>
          <a href={contentLink}  target="_blank"
        rel="noreferrer" className="read-more">
            Leer mas <span className="sr-only">{title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </StyledArticle>
  );
};

export default Article;