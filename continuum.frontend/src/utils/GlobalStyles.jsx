import { createGlobalStyle } from 'styled-components';

import nova from './fonts/NovaFlat-Regular.ttf';
import quicksand from './fonts/Quicksand-Light.ttf';
import blender from './fonts/Blender-Pro-Book.otf';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Nova Flat';
        src: url(${nova}) format('truetype');
    }

    @font-face {
        font-family: 'Quicksand';
        src: url(${quicksand}) format('truetype');
    }

    @font-face {
        font-family: 'BlenderProBook';
        src: url(${blender}) format('truetype');
    }
`

export default GlobalStyles;