import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Pretendard from 'assets/fonts/Pretendard-Regular.woff';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  /* other styles */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  .mainContainer {
    margin-top: 100px;
    margin-bottom: 70px;
  }

  body {
    font-family: 'Pretendard';
    font-style: normal;
    src: url(${Pretendard}) format('truetype');
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
}
`
