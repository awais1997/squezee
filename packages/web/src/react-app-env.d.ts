/// <reference types="react-scripts" />

import { Palette } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
   interface Palette {
     icon: any
     white: any
     neutral: any
   }
   interface Palette {
    neutral: Palette['primary'];
    background: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
    background: PaletteOptions['primary'];
  }
}

declare module 'react-facebook-login-with-hooks';