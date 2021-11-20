import { MediaQuery } from 'typestyle/lib/types';

export const COLOR_TEXT_PRIMARY: string = 'black';
export const COLOR_TEXT_SECUNDARY: string = '#1930FD';
export const COLOR_PINK: string = '#EF629F';
export const COLOR_LIGHTBLUE: string = '#70E1F5';
export const COLOR_YELLOW: string = '#F8FD19';
export const COLOR_ORANGE: string = '#FFAA07';
export const COLOR_BLUE: string = '#0066FF';

export const BREAKPOINT_SM: number = 576;
export const BREAKPOINT_MD: number = 768;
export const BREAKPOINT_LG: number = 992;
export const BREAKPOINT_L: number = 1025;
export const BREAKPOINT_XL: number = 1200;

export const MEDIA_XS_ONLY: MediaQuery = {maxWidth: BREAKPOINT_SM - 1};
export const MEDIA_MD_MAX: MediaQuery = {maxWidth: BREAKPOINT_MD };
export const MEDIA_L_MAX: MediaQuery = {maxWidth: BREAKPOINT_L -1 };
export const MEDIA_LG_MAX: MediaQuery = {maxWidth: BREAKPOINT_LG -1 };
export const MEDIA_SM_ONLY: MediaQuery = {maxWidth: BREAKPOINT_MD - 1, minWidth: BREAKPOINT_SM};
export const MEDIA_MD_ONLY: MediaQuery = {maxWidth: BREAKPOINT_LG - 1, minWidth: BREAKPOINT_MD};
export const MEDIA_LG_ONLY: MediaQuery = {maxWidth: BREAKPOINT_L - 1, minWidth: BREAKPOINT_LG};

export const MEDIA_L: MediaQuery = {minWidth: BREAKPOINT_L };
export const MEDIA_SM: MediaQuery = {minWidth: BREAKPOINT_SM};
export const MEDIA_MD: MediaQuery = {minWidth: BREAKPOINT_MD};
export const MEDIA_LG: MediaQuery = {minWidth: BREAKPOINT_LG};
export const MEDIA_XL: MediaQuery = {minWidth: BREAKPOINT_XL};

export const FONT_FAMILY_1: string = '"Georgia", serif';
export const FONT_FAMILY_2: string = '"Montserrat", sans-serif';
export const FONT_FAMILY_3: string = '"Open Sans", sans-serif';
export const FONT_FAMILY_4: string = '"Helvetica Neue", sans-serif';

export const FONT_WEIGHT_LIGHT: number = 300;
export const FONT_WEIGHT_REGULAR: number = 400;
export const FONT_WEIGHT_SEMIBOLD: number = 600;
export const FONT_WEIGHT_BOLD: number = 700;
export const FONT_WEIGHT_EXTRABOLD: number = 800;