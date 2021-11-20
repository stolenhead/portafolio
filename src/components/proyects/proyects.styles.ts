import { style , media} from 'typestyle';
import { COLOR_PINK,MEDIA_LG_MAX, COLOR_LIGHTBLUE} from '../../styles/constants';

export const proyectsClassName  = style(
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(20%, 2fr))',
    gridAutoRows: '50px',
    gridGap: '1px',
    height:'auto',
    minHeight:'100vh',
    backgroundImage:'url(/data/images/noise.webp)',
    backgroundPosition: 'center',
  },media(MEDIA_LG_MAX, {
    height:'auto',
  }),
);
