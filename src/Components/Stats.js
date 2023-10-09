import {useState, useEffect} from "react";
import Display from "../Components/Display"

const str="I me my mine myself you your yours yourself he him his himself she her her hers herself it it its itself we us our ours ourselves they them their theirs themselves";

function Stats({text}){
  const  [words,setWords]= useState(0);
  const  [sentences,setSentences]= useState(0);
  const  [para, setPara]= useState(0);
  const  [pronouns, setPronouns] = useState(0);
   useEffect(()=>{
      getWords();
      getSentences();
      getParas();
      getPronouns();
   });

   const getSentences= ()=>{
      let count= 0;
      count+= text.split(".").length-1;
      count+= text.split("?").length-1;
      count+= text.split("!").length-1;
      setSentences(count);
   }

   const getParas= ()=>{
      const count= text.split("\n").length-1;
      setPara(count);
   }

   const getWords= ()=>{
      const arr= text.split(" ");
      let count= arr.length-1;
      setWords(count);
   }

   const getPronouns= ()=>{
      const arr= text.split(" ");
      const prns= str.split(" ");
      let count = 0;
      for(let i=0;i<arr.length;i++)
      {
         for(let j=0;j<prns.length;j++)
         {
            if(arr[i]===prns[j]) count++;
         }
      }
      setPronouns(count);
   }

 return (
 <div  id ="stats" style={{backgroundColor:"white"}}>
    <Display qty="Words" value= {words}></Display>
    <Display qty="Sentences" value= {sentences}/>
    <Display qty="Paragraphs" value= {para}/>
    <Display qty="Pronouns" value= {pronouns}/>
 </div>
 )
}

export default Stats;