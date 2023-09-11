import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  background: #F0F8FF;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  
  a {
    color: currentColor;
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  h1 {
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: 800;
  }
  
  h2 {
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 700;
  }
  
  p {
    font-size: 24px;
    font-weight: 400;
  }`;