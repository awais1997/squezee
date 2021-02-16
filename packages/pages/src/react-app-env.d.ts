/// <reference types="react-scripts" />

import { Palette } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
   interface Palette {
     icon: any
     white: any
     neutral: any
   }
}
