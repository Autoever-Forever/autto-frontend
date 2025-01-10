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
    --text-orange: #FF7F50;
    --text-red: #E63312;
    --text-blue: #0A84FF;
    --text-deepgrey: #828282;


    --bg-mint: #A2D2FF;
    --bg-grey: #F0F0F0;
  

    --border-grey: #D4D4D4
    }
    
`;
