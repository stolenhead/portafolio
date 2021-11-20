import React , { useState, useEffect } from 'react';
import { COLOR_ORANGE, COLOR_YELLOW } from '../../styles/constants';
import { proyectsBoxClassName, tall, short,projectDemoBtn, superTall, projectImage, projectDataBox} from './proyects-box.styles';
import {proyect } from '../../interfaces/interfaces';
import { COLOR_PINK, COLOR_LIGHTBLUE, COLOR_BLUE} from '../../styles/constants';

interface ProyectBoxPeops {
  proyectData: proyect
}

export const ProyectsBox: React.FC<ProyectBoxPeops> = ({
  proyectData,
}) =>{
  const sizes = [short, tall,superTall]
  const colors = [COLOR_PINK, COLOR_LIGHTBLUE, COLOR_BLUE, COLOR_YELLOW]
  const [isShown, setIsShown] = useState(false)
  return(
    proyectData && (
      <div style={ {color: colors[proyectData.color] } }
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
       className={[ proyectsBoxClassName, proyectData.back_color, sizes[proyectData.size_expand] ].join(' ') } >
        {isShown ? (
          <div className={`${projectDataBox} container `}>
            <div className={` ${proyectData.image_url ? "col-lg-7" : "col-lg-12"} `}>
              <p>{ proyectData.body}</p>
              
            </div>
            <div className={` ${proyectData.image_url ?"col-lg-5" : "hidden"} `}>
              <img className={projectImage} src={ proyectData.image_url}></img>
              <a style={ {color: colors[proyectData.color] } } className={projectDemoBtn} href={ proyectData.externa_link} target="_blank">SEE DEMO</a>
            </div>
        </div>
        ): (
          <div>{ proyectData.title}</div>
        )}
      </div>
    )
  )
}

// export const ProyectsBox: React.FC<ProyectBoxPeops> = ({
//   proyectData
// }) =>{
//   return(
//     <div className={`${proyectsBoxClassName} col-lg-3 ${proyectData.back_color} `} >
//         { proyectData.title}
//     </div>
//   )
// }