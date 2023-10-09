import {useState,useEffect} from "react";

function Records({arr}){

    const [time,setTime]= useState(0);
    const [longestWord, setLongestWord] = useState("");
    useEffect(()=>{
        getTime();
        getLongestWord();
    })
    const getLongestWord= ()=>{
        let res= "";
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i].length>res.length)res=arr[i];
        }
        setLongestWord(res);
    }
    const getTime= ()=>{
        const count= arr.length-1;
        if(count%200===0)setTime(count/200);
        else setTime(~~(count/200)+1);
    }
return(
    <div id= "records"style={{backgroundColor:"white"}}>
        <p className="Para"><b style={{color: "grey"}}>Average Reading Time-</b> {time} min</p>
        <p className="Para"><b style={{color: "grey"}}>Longest Word-</b> {longestWord}</p>
    </div>
);
}

export default Records;