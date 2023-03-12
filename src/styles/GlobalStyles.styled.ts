import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
    }
    * {
        box-sizing: border-box;
    }
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    a {
        text-decoration: inherit;
        color: inherit;
    }

`;
