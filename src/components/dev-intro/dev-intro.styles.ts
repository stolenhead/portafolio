import { style, media, keyframes } from 'typestyle';
import { COLOR_PINK,MEDIA_XS_ONLY, COLOR_LIGHTBLUE, MEDIA_MD_MAX} from '../../styles/constants';




export const devHide = style({
  display:'none'
})

export const dev = style({
  display:'inline-block'
})

export const devBoxParentClassName = style({
  $debugName: 'devBoxParent',
  marginLeft:'33.3%',
  cursor:'url(/data/images/re.png), auto'
},
media(MEDIA_MD_MAX, {
  marginLeft:'0px',
}) )

export const rainbowBackTop = style(
  {
    $debugName: 'rainbowBackTop',
    height:'106PX',
    backgroundImage:'url(/data/images/rainbow-png-1.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '130px 100px',
    textAlign: 'center'
  }
)

export const inlineRainbows = style({
  display:'inline-flex',
  position: 'relative',
  height: '50px',
  zIndex:10,
  $nest: {
    'button': {
        zIndex: 100,
    }  
  }    
})

export const rotateBottom = style({
  transform: 'rotate(180deg)',
  zIndex: 99,  
  backgroundSize: '204px 144px',
  backgroundPositionY: '-5px',
  position: 'relative',
  transition: 'all 1.2s ease-in-out',
})

export const rotateTop = style({

  $debugName: 'rotateTop',
  zIndex: 99,  
  backgroundSize: '204px 144px',
  backgroundPositionY: '-5px',
  position: 'relative', transition: 'all 1.2s ease-in-out'
})

export const rotateLeft = style(
  {
    $debugName: 'rotateLeft',
    transform: 'rotate(-89deg)',   
    position: 'absolute',
    width: '200px',
    backgroundPositionX: '56px',
    backgroundPositionY: '15px',
    left: '-124px',
    height:'100px',
    zIndex: 1,
    transition: 'all 1.2s ease-in-out'
  }
)

export const rotateRight = style({
  transform: 'rotate(-270deg)',
  width: '200px',
  display: 'inline-block',
  position: 'absolute',
  right: '-128px',
  backgroundPositionX: '10px',
  backgroundPositionY: '34px',
  zIndex: 1,
  transition: 'all 1.8s ease-in-out'
})

export const rellenoForzarScroll = style({
  height: '200vh'
},media(MEDIA_XS_ONLY, {
  height: '110vh'
}),)



export const devButtonBoxx = style({
  $debugName: 'devButtonBox',
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  margin: 'auto',
  height: '230px',
  textAlign: 'center',
  width: '13em',
})

export const cloudBig = style(
  {
    width: '300px',
    height: '200px',
  },media(MEDIA_MD_MAX, {
    width: '180px',
    height: '130px',
    backgroundPositionY: '30px'
  }) 
)

export const cloudTop = style({
  top: '1rem'
})

export const cloudBottom = style({
  bottom: '2rem',
})


export const cloudSmall = style(
  {
    width: '100px',
    height: '70px',
  }
)

export const cloudLeft = style(
  {
    left:'15rem'
  }
)

export const cloudLeftBottom = style(
  {
    backgroundPositionY:'40px',
    bottom: '1rem!important',
  }
)

export const cloudRight = style(
  {
    right:'15rem',
    
  }
)

export const cloudRightBig = style(
  {
    right:'-20px',
    width: '300px',
    height: '200px',
    backgroundPositionY:'40px',
    bottom: '1rem!important',
  },media(MEDIA_MD_MAX, {
    width: '180px',
    height: '130px',
    backgroundPositionY: '30px'
  }) 
)

export const cloud = style(
  {
    backgroundImage:'url(/data/images/nube.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
   
  }
)

const slideRight = keyframes({
  '0%': {
    right: '-5rem',
   
  },
  '100%': {
    right: '100%',
  }
})

const slide= keyframes({
  '0%': {
    left: '-5rem',
   
  },
  '100%': {
    left: '100%',
   
  }
});

export const bigLeftEffect = style({
  animationName: `${slide}`,
  animationDuration: '12s',
  animationTimingFunction: 'ease',
  animationDelay: '0.5s',
  animationIterationCount: 'infinite'
})

export const bigRightEffect = style({
  animationName: `${slideRight}`,
  animationDuration: '12s',
  animationTimingFunction: 'ease',
  animationDelay: '0.5s',
  animationIterationCount: 'infinite'
})

export const devBoxClassName  = style(
  {
    backgroundColor: COLOR_LIGHTBLUE,
    height:'100vh',
    display: 'flex',
    position:'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    perspective: '1px',
    $nest:{
      '&:hover':{
       
          [`.${cloudBig}`]:{
            animationName: `${slide}`,
            animationDuration: '12s',
            animationTimingFunction: 'ease',
            animationDelay: '0.5s',
            animationIterationCount: 'infinite'
          },
          [`.${cloudRightBig}`]:{
            animationName: `${slideRight}`,
            animationDuration: '12s',
            animationTimingFunction: 'ease',
            animationDelay: '0.5s',
            animationIterationCount: 'infinite'
          },
          
      }
    }
  }
);

export const proyectBox= style({
  position:'relative'
})

export const devParallax = style({
  $debugName: 'devParallax',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
})

export const charlieBox = style({
  position: 'absolute',
  bottom: 0,
  right: '-3rem',
})

export const charlie = style({
  transform: 'scaleX(-1)',
  height:'200px',
  position: 'absolute',
  right: '-3rem',
  bottom:0
},
media(MEDIA_MD_MAX, {
  height:'130px',
  right: '0rem',
}) 
)

export const devButtonn =style({
  border: '5px solid transparent',
  background: 'white',
  color: COLOR_LIGHTBLUE,
  overflow:' hidden',
  width: '200px',
  whiteSpace: 'nowrap',
  textIndent: '16px',
  fontWeight: 'bold',
  transition: 'all 1s ease-in-out',
  cursor:'url(/data/images/re.png), auto',
  $nest: {
    '&:hover':{
     border: '4px solid red',
    },
    'b': {
      display: 'inline-block',
      backgroundClip: 'text',
      color:COLOR_PINK
    } 
    
  }    
})



export const fadeOut = style({
  opacity:0,
  height:0,
  transition: 'all 3s ease-in-out',
  $nest:{
    [`.${rotateBottom}`]:{
      transform: 'skew(90deg, -19deg)'
    },
    [`.${rotateLeft}`]:{
      transform: 'skew(-239deg, -90deg)'
    },
    [`.${rotateRight}`]:{
      transform: 'skew(-239deg, -90deg)'
    },
    [`.${rotateTop}`]:{
      transform: 'skew(-90deg, -19deg)'
    },
  }
})

export const fadeIn = style({
  opacity:1,
  height:'100vh',
 
})