import { style, media } from 'typestyle';
import { COLOR_PINK, FONT_FAMILY_2, MEDIA_LG,MEDIA_XS_ONLY, FONT_FAMILY_3, MEDIA_LG_MAX} from '../../styles/constants';

export const bioBoxClassName  = style(
  {
    backgroundColor: COLOR_PINK,
    height:'100vh',
    position:'fixed',
    cursor:'url(data/images/re.png), auto'
  }
);

export const bioBoxInsideClassName  = style(
  {
    backgroundColor: 'white',
    height:'80vh',
    width:'80%',
    maxWidth:'900px',
    marginTop:'3rem',
    marginBottom:'auto',
    boxShadow: '-18px 19px 0px 3px rgba(0,0,0)',
    cursor:'url(data/images/re.png), auto',
  },media(MEDIA_XS_ONLY, {
    width:'90%',
    marginRight:'7px!important',
    height:'80vh',
  }),
);
export const bioContentClassName = style(
  {
    fontFamily: FONT_FAMILY_3,
    fontSize:'2.5rem',
    lineHeight:'3rem',
    padding:'2rem',
    height:'260px',
  },media(MEDIA_LG, {
    fontSize:'2.4rem',
    lineHeight:'3rem',
    padding:'2rem',
    height:'230px',
  }),media(MEDIA_XS_ONLY, {
    fontSize:'30px',
    lineHeight:'39px',
    padding:'2rem',
    height:'230px',
  }),
)

export const contact = style(
  {
    backgroundColor: 'white',
    display: 'block',
    width: '70%',
    minHeight: '40px',
    border: '3px solid purple',
    padding: '15px',
    margin: 'calc(12vh - 60px) 1rem 0 auto',
    boxShadow: '-7px 7px 0px 0px white, -7px 7px 0px 3px green, -17px 17px 0 0px white, -17px 17px 0 3px yellow, -27px 27px 0 0px white, -27px 27px 0 3px orange, -37px 37px 0 0px white, -37px 37px 0 3px red', 
    transition: 'box-shadow 1s, top 1s, left 1s',
    position: 'relative',
    top: 0,
    left: 0,
    $nest: {
      '&:hover':{
        cursor:'url(data/images/re.png), auto',
        top: '37px',
        left: '-37px',
        boxShadow: '0 0 0 -3px white, 0 0 0 0 green,0 0 0 -3px white, 0 0 0 0  yellow,0 0 0 -3px white, 0 0 0 0  orange,0 0 0 -3px  white, 0 0 0 0  red',
      },
      'p':{
        fontSize: '11px',
        letterSpacing: '0.5px',
        marginBottom: '10px',
        marginTop:'18px',
        fontWeight: 'bold'
      },
      'h2':{
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '14px',
        fontFamily: FONT_FAMILY_3,
        marginTop: '0px'
      }
    }
  },media(MEDIA_LG_MAX, {
    margin: 'calc(12vh - 90px) 1rem 0 auto',
  }),
  media(MEDIA_XS_ONLY, {
    left:'10px',
    padding: '15px 5px',
    width: '80%',
    margin: 'calc(12vh - 80px) 1rem 0 auto',
    boxShadow: '-7px 7px 0px 0px white, -7px 7px 0px 3px green, -17px 17px 0 0px white, -17px 17px 0 3px yellow, -27px 27px 0 0px white, -27px 27px 0 3px orange', 
    $nest: {
      'p':{
        marginTop:'10px',
      }
    }
  }),
)


export const contactDivClassName = style({
  $debugName: 'contactDivClassName',
  height: '50px',
  width: '50px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  top: 0
},media(MEDIA_XS_ONLY, {
  height: '30px!important',
  width: '30px!important',
}),
)
export const contactBox = style({
  'display': 'inline-flex',
  $nest:{
    'a':{
      color:'black',
      padding:'1rem 10px',
      marginRight:'10px'
    }
  }
})

export const contactLknClassName = style({
  backgroundImage:'url(data/images/cv.png)',
})
export const contactCvClassName = style({
  backgroundImage:'url(data/images/cv.png)',
})

export const contactMailClassName = style({
  backgroundImage:'url(data/images/mail.png)',
  height: '60px',
  width: '60px',
  backgroundPositionY:'8px'
})