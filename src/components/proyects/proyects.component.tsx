import React from 'react';
import { proyectsClassName } from './proyects.styles';
import { ProyectsBox}  from '../proyects-box/proyects-box.component';
import data from '../data/data.json';


const projectsList = data.projects;

export const Proyects: React.FC<any> = ({
}) =>{
  return(
    <div className={`${proyectsClassName} `}>
      {
        projectsList.map((project)=>{
          return(
            <>
              <ProyectsBox proyectData={project}></ProyectsBox>
            </>
          )
        })
      }
    </div>
  )
}

// export const Proyects: React.FC<any> = ({
// }) =>{
//   return(
//     <div className={`${proyectsClassName} container row`}>
//       {
//         projectsList.map((project)=>{
//           return(
//             <>
//               <ProyectsBox proyectData={project}></ProyectsBox>
//             </>
//           )
//         })
//       }
//     </div>
//   )
// }