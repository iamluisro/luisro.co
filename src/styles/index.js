import { css, createGlobalStyle } from "styled-components"

export const size = {
  small: 400,
  medium: 480,
  mediumL: 960,
  large: 1140,
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const GlobalStyles = createGlobalStyle`
  .___gatsby{
    position: absolute;

}


  
  }
  main{
    padding-top: 0;
    margin-bottom: 0;
    background: #ebebeb;
    
  .main-container {
    display: grid;
  }
    
  }
  body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0;
}
  ${above.mediumL`
   main{
      padding-top: calc(3.5rem - 100vh);
      margin: 0;
      background: #ebebeb;

    .main-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-top: 3em;

    .Info-container{
      overflow: auto;
    height: 125vh;
    }
    }
    }
    `}
  ${above.large`
   main{
      padding-top: calc(4.5rem - 100vh);
    }
  `}
`
