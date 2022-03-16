import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{ 
        padding: 0;
        margin: 0; 
    }

    :root {
        --background: #191920;
        --purple: #7059bd;
        --secondPurple: #6650a9;
        --white: #fff;
    }
    
    body, input, textarea, button { 
        font-family: 'Heebo', sans-serif;
        background: var(--background);
    }

    a {
        text-decoration: none;
    }

    h1, h2, h3, h4, strong { 
        font-weight: 600;
    }

    button{ 
        cursor: pointer;
        
        &:hover { 
            filter: brightness(0.9);
        }
    }
`