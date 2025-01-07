import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
      box-sizing: border-box;
    }

    :root{
    --main-blue: #00ADB5;
    --text-grey: #B9B9B9;
    --text-black: #495057;
    --text-white: #FFFFFF;
    }
    
`;
