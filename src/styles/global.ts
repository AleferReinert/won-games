import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        background-color: ${theme.colors.darkBg};
        overflow-x: hidden;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::before,
        &::after {
          box-sizing: inherit;
        }
      }

      button {
        cursor: pointer;
        border: 0;
        font-family: inherit;
        background-color: transparent;
      }

      label {
        cursor: pointer;
      }

      button:focus,
      svg:focus {
        outline: none;
      }

      img {
        position: relative;
      }

      img::after {
        content: attr(alt);
        position: absolute;
        inset: 0;
        background-color: ${theme.colors.lightGray};
        display: flex;
        align-items: center;
        font-style: italic;
        text-align: center;
        justify-content: center;
        font-size: ${theme.font.sizes.xsmall};
        color: ${theme.colors.gray};
      }
    `}    
`

export default GlobalStyles
