import { createGlobalStyle } from "styled-components";
import "@fontsource/oswald";
import "@fontsource/montserrat";


const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: "Montserrat", sans-serif;
    overflow-x: hidden;
    
}
h1{
    font-family: "Oswald", sans-serif;
    font-size: 70px;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{ 
    color: inherit;
    text-decoration: none;
}
`;

export default GlobalStyles;
