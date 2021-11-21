import React, { useRef, useEffect, useState }from 'react';
import { Proyects } from '../proyects/proyects.component';
import { devBoxClassName, devButtonBoxx, rainbowBackTop, 
  rotateBottom,rotateTop, rotateLeft, cloud,cloudBig,cloudSmall,
  rotateRight,rellenoForzarScroll,bigRightEffect,devBoxParentClassName,bigLeftEffect, inlineRainbows, devButtonn, dev,devHide,  devParallax, fadeIn, fadeOut, cloudLeft, cloudTop, cloudBottom, cloudRight, cloudRightBig, cloudLeftBottom, charlie, charlieBox, proyectBox  } from './dev-intro.styles';

  

  export const DevIntro: React.FC<any> = ({
  intro
  }) =>{
    const [isIntro, setIntro] = useState(false);
    const [isMob, setMob] = useState(false);
    const [isMobR, setMobR] = useState(false);
    const refChild = useRef<HTMLDivElement>(null);
    const [width, setWidth]   = useState(window.innerWidth);

    const updateDimensions = () => {
      setWidth(window.innerWidth);
    }

    const startAnimationMobile = ()=>{
      if(width <= 810){
        console.log('hoo', width);
        setMob(true);
        setMobR(true);
      }else{
        setMob(false);
        setMobR(false);
      }
    }

    useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      startAnimationMobile();
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);

   useEffect(() => {
   
    if(isIntro=== true) {
      const timer = setTimeout(() => {
        const proyect = document.querySelector('#proyect')
        if(proyect){
          proyect.scrollIntoView({
            behavior: 'smooth'
          });
         
          //(refChild.current)? refChild.current.style.opacity = `${1 - window.scrollY / 250 }`: 're' ;
        }
      }, 1500);

      return () => clearTimeout(timer);
    }     
  }, [isIntro])

  return(
    <div className={  `${ devBoxParentClassName } col-lg-8` }>
    <div className={ [isIntro ? fadeOut : fadeIn, devBoxClassName ].join(' ') } ref={refChild } >
    { !isIntro && (
      <div>
          <div  className={[isMob ? bigLeftEffect : '', cloud, cloudBig, cloudTop].join(' ')}></div>
          <div className={[cloudSmall,cloud, cloudLeft, cloudTop].join(' ')}></div> 
          <div className={[isMob ? bigRightEffect : '', cloud, cloudTop,  cloudRightBig].join(' ')}></div>
          <div className={[cloudSmall,cloud, cloudRight, cloudTop].join(' ')}></div> 
      </div>
    )}
      
      <div className={[devButtonBoxx,].join(' ')} >
        <div className={[rainbowBackTop, rotateTop].join(' ')}></div>
        <div className={inlineRainbows}>
          <div className={[rainbowBackTop ,rotateLeft].join(' ')}></div>
          <button className={devButtonn}  onClick={ ()=> setIntro(true)} > AS  <span><s>DEV</s></span>
            <b>UNICORN</b>
          </button>
          <div className={[rainbowBackTop ,rotateRight].join(' ')}></div>
        </div>
        <div className={[rainbowBackTop ,rotateBottom].join(' ')}></div>
      </div>

      { !isIntro && (
      <div>
          <div  className={[isMob ? bigLeftEffect : '',cloud, cloudBig, cloudBottom,cloudLeftBottom].join(' ')}></div>
          <div className={[cloudSmall,cloud, cloudLeft, cloudBottom].join(' ')}></div>
          <div className={[isMob ? bigRightEffect : '',cloud, cloudRightBig, cloudBottom].join(' ')}></div>
          <div  className={[cloudSmall,cloud, cloudRight, cloudBottom].join(' ')}></div>
      </div>
    )}
      
      <div className={rellenoForzarScroll}></div>
    </div>
    { isIntro && (
      <div id="proyect"  className={proyectBox}>
      <Proyects></Proyects>
        <div className={charlieBox}>
          <a onClick={ ()=> setIntro(false)} ><img className={ charlie} src="data/images/charlie.png"></img></a>
        </div>
      </div>
      )
    }
    </div>
  )
}

{/* <div className={ `${ devBoxParentClassName } col-lg-8` }>
    <div className={ `${ devBoxClassName } ` }>
      <div className={[devParallaxBehind,  devParallax].join(' ')} >
        <div className={[cloud].join(' ')}></div>
      </div>
      <div className={[devButtonBox,devParallaxBase,  devParallax].join(' ')} >
        <div className={[rainbowBackTop, rotateTop].join(' ')}></div>
        <div className={inlineRainbows}>
          <div className={[rainbowBackTop ,rotateLeft].join(' ')}></div>
          <button className={devButton}> AS <span className={dev}>DEV</span> <span className={devHide}><s>DEV</s></span>
            <b>UNICORN</b>
          </button>
          <div className={[rainbowBackTop ,rotateRight].join(' ')}></div>
        </div>
        <div className={[rainbowBackTop ,rotateBottom].join(' ')}></div>
      </div>
      <div className={rellenoForzarScroll}></div>
    </div>
    <Proyects></Proyects>
    </div> */}