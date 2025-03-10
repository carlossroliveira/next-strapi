import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0 auto;
  max-width: 1350px;

  background-color: cadetblue;


/*   display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-areas:
    "header"
    "benefits"
    "flow"
    "data"
    "suite"
    "contact"
    "products"
    "footer"
; */
}
`
