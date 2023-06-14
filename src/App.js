import './App.css';
import { useState } from 'react';
import Button from './Button';

function App() {
  const [ans,setAns]=useState(0);
  const [inputVal,setInputVal]=useState(0);
  const msg = new SpeechSynthesisUtterance();
  const hold={textAlign:"left",margin:"1%"};

  //operations logic
  function sum(){
    let temp=Number(ans)+Number(inputVal);
    setAns(temp);
  }
  function subtract(){
    let temp=Number(ans)-Number(inputVal);
    setAns(temp);
  }
  function multiply(){
    let temp=Number(ans)*Number(inputVal);
    setAns(temp);
  }
  function divide(){
    let temp=Number(ans)/Number(inputVal);
    setAns(temp);
  }
  function reset(){
    setInputVal(0);
  }
  function resetResult(){
    
    setAns(0);
  }
  function readAloud(){
    msg.text=ans;
    window.speechSynthesis.speak(msg);
  }
  
  return (
    <div style={hold} className="App">
      <h1 >Simplest Working Calculator</h1>
      <h3>{ans}</h3> 
      <input value={inputVal} style={{fontSize:"18px"}}  onChange={(e)=>{setInputVal(e.target.value)}} />

      <div>
        <div>
          <Button name=":)"/>
          <Button name="Read" col="lightGreen" f={readAloud}/>
          <Button name="Reset" col="tomato" f={reset}/>
          <Button name="Reset Result" col="tomato" f={resetResult}/>  
        </div>
        <div>
          <Button name="Sum" col="lightGrey" f={sum}/>
          <Button name="Subtract" col="lightGrey" f={subtract}/>
          <Button name="Multiply" col="lightGrey" f={multiply}/>
          <Button name="Divide" col="lightGrey" f={divide}/>  
        </div>
      
      
      </div>

    </div>
  );
}

export default App;
