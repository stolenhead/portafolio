import React , { useState, useEffect, useRef  } from 'react';
import { bioBoxClassName, contact,contactBox,contactLknClassName,contactDivClassName, bioBoxInsideClassName ,contactMailClassName,bioContentClassName, contactCvClassName } from './biography.styles';

const words = [ "Hola mundo", "me llamo Andrea ", "y soy Front-End developer", ":] "];

export const Biography: React.FC<any> = ({
  title
}) => {
  const [index, setIndex] = useState(0);
  const [intro, setIntro] = useState('');

  var dataIntro = "Hello world my name is Andrea, i'm Front-End developer and i love:";
  var dataInterests = [ "chocolate.","makis.", "memes.", "world peace."]
  const carouselText = [
    {text: "Apple", color: "red"},
    {text: "Orange", color: "orange"},
    {text: "Lemon", color: "yellow"}
  ]
  var speedd = 50;
 

  useEffect(()=>{
    const typerIntro = ()=>{
      if(index < dataIntro.length){
        setIntro(intro + dataIntro.charAt(index));
        setIndex(index+1);
      }else{
        setIsTyping(true)
      }
      
      
    } 
      const timeout = setTimeout(typerIntro, speedd)

      return () => clearTimeout(timeout);
  },[index, intro])

  const [subIndex, setSubIndex] = useState(0);
  const [subIntro, setSubIntro] = useState('');
  const [isReverse, setIsReverse] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const countRef = useRef(0);

  
  useEffect(()=>{
    if(isTyping){
      carousel(dataInterests);
    }
  },[isTyping])



  async function typeSentence(sentence:string, delay = 100) {
    const letters = sentence.split("");
    let i=0;
    while(i< sentence.length) {
      await waitForMs(delay); 
       setSubIntro((prev) => prev + sentence.charAt(i))
       i++
    }
   
    return;
  }
  async function deleteSentence(sentence:string) {
   
    let letters = sentence.split("");
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
    
      setSubIntro( letters.join(""));
    }
  }

  async function carousel(carouselList:any) {
    var i = 0;
    while(true) {
      await typeSentence(carouselList[i]);
      await waitForMs(1500);
      await deleteSentence(carouselList[i]);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function waitForMs(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


  return(
    <div className={ `${bioBoxClassName } col-lg-4 bio_back` }>
        <div className={`${bioBoxInsideClassName } center` }>
          <div className={bioContentClassName}>{intro} {subIntro}</div>
          <div className={contact}>
            <h2>
              Contact me!
            </h2>
            <div >
              <div className={contactBox}>
                <div  className={ `${contactCvClassName} ${contactDivClassName }`} ></div>
                <p>Resume <a href="data/images/ANDREA-CABRERA-CV.pdf" download="ANDREA-CV.pdf">ES</a> <a href="data/images/ANDREA-RESUME.pdf" download="ANDREA-RESUME.pdf">EN</a></p>
              </div>
              
              <div className={contactBox}>
                <div className={ `${contactMailClassName } ${contactDivClassName }` }></div>
                <p>andrea.palomino.ruby@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

