import React from 'react';
import { Biography} from '../biography/biography.component';
import { DevIntro } from '../dev-intro/dev-intro.component';
import { Proyects } from '../proyects/proyects.component';


export const Holi: React.FC<any> = ({
  title
}) =>{
  return(

    <div className="container row">
      <Biography ></Biography>
      
      <DevIntro></DevIntro>
     
      
    </div>
    
  )
}
