import { couldStartTrivia } from 'typescript';
import { style, media} from 'typestyle';
import { COLOR_PINK, COLOR_LIGHTBLUE, MEDIA_LG_MAX} from '../../styles/constants';

export const proyectsBoxClassName  = style(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.3em',
    fontWeight: 'bold',
    padding:'15px',
    cursor:'url(/data/images/re.png), auto'
  }
);

 export const superTall = style(
   {
    gridColumn: 'span 2',
    gridRow:' span 4',
    $nest: {
      '&:hover':{
        gridRow:' span 6',
        gridColumn: 'span 3',
        height:'auto'
      }
    }
   },media(MEDIA_LG_MAX, {
    gridColumn: 'span 2',
    gridRow:' span 4',
    $nest: {
      '&:hover':{
        gridRow:' span 6',
        gridColumn: 'span 4',
      }
    }
  }),
 )

 export const tall = style(
  {
   gridColumn: 'span 1',
   gridRow:' span 2',
   $nest: {
      '&:hover':{
        gridRow:' span 6',
        gridColumn: 'span 2',
      }
    }
  },media(MEDIA_LG_MAX, {
    gridColumn: 'span 2',
    gridRow:' span 4'
  }),
)

export const projectDemoBtn = style(
  {
    marginTop: '10px',
    padding: '5px 10px',
    border: '1px solid',
    textDecoration:' none',
    display: 'block',
    textAlign: 'center'
  }
)


export const short = style(
  {
   gridRow:' span 2',
   gridColumn: 'span 1',
  },media(MEDIA_LG_MAX, {
    gridColumn: 'span 2',
    gridRow:' span 4',
  }),
)

export const projectImage = style(
  {
    width:'100%',
    height:'auto'
  }
)
export const projectDataBox = style(
  {
   padding:'1rem!important',
   $nest: {
    'p':{
      overflow:'hidden',
      wordBreak:'break-word'
    }
  }
  }
)
export const pink = style(
  {
    backgroundColor: COLOR_PINK,
  }
);

export const blue = style(
  {
    backgroundColor: COLOR_LIGHTBLUE,
  }
);

export const devBoxInsideClassName  = style(
  {
    backgroundColor: 'white',
    height:'80vh',
    width:'70%',
    maxWidth:'900px',
    marginTop:'auto',
    marginBottom:'auto',
    boxShadow: '-18px 19px 0px 3px rgba(0,0,0)'
  }
);