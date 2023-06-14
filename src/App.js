import './App.css';
import { useState } from 'react';
import {Stack , Grid,Button, TextField,Typography} from "@mui/material";
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

function App() {
  const [ans,setAns]=useState(0);
  const [inputVal,setInputVal]=useState(0);
  const msg = new SpeechSynthesisUtterance();

  //operations logic
  function sum(){
    let temp=Number(ans)+Number(inputVal);
    setInputVal('');
    setAns(temp);
  }
  function subtract(){
    let temp=Number(ans)-Number(inputVal);
    setInputVal('');
    setAns(temp);
  }
  function multiply(){
    let temp=Number(ans)*Number(inputVal);
    setInputVal('');
    setAns(temp);
  }
  function divide(){
    let temp=Number(ans)/Number(inputVal);
    setInputVal('');
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
    <div className="App">
      
      <Stack ml={"33%"} mt={"5%"}> 
        <Grid container direction="column" xs={3} m={2}>
          <Typography variant="h5" >Simplest Working Calculator</Typography>
          <Typography variant="h3">{ans}</Typography>
          <TextField sx={{width:350}} id="outlined-basic" value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} label="New Value" variant="outlined" helperText="Enter new value here" />
        </Grid>
        <Stack m={2} spacing={2} direction="row">
          <Button variant="contained" color="success" endIcon={<RecordVoiceOverIcon/>} onClick={readAloud}>Read</Button>
          <Button variant="contained" color="error" onClick={reset}>Reset</Button>
          <Button variant="contained" color="error" onClick={resetResult}>Reset Result</Button>
        </Stack>
        <Stack m={2} spacing ={4} direction="row">
          
          <Button variant="contained" onClick={sum}>+</Button>
          <Button variant="contained" onClick={subtract}>-</Button>
          <Button variant="contained" onClick={multiply}>x</Button>
          <Button variant="contained" onClick={divide}>÷</Button>
        </Stack>
             
      </Stack>

    </div>
  );
}

export default App;
