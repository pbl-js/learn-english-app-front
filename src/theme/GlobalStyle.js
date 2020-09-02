import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
    
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body {
        font-family: "Montserrat", sans-serif;
        font-size: 1.6rem;
        color: white;
    }
`;

export default GlobalStyle;
