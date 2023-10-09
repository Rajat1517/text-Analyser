import Stats from "./Components/Stats";
import Records from "./Components/Records";
import './App.css';
import {useState} from "react";

function App() {
 const [enterText, setEnterText] = useState("");
 

  return (
    <div className="App">
      <div id="top">
      <Stats text= {enterText}/>
      </div>
      <div id="input">
      <textarea id= "entry" name="" cols="" rows="" placeholder="Enter Text" 
      value={enterText} 
      onChange={(e)=>setEnterText(e.target.value)}
      >
      </textarea>
      </div>
      <div id="bottom">
      <Stats text= {enterText}/>
      </div>
      <Records arr={enterText.split(" ")}></Records>
    </div>
  );
}

export default App;
