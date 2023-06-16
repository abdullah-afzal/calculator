import './App.css';
import { useState } from 'react';
import {Stack , Grid,Button, TextField,Typography,Divider} from "@mui/material";
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import Particles from './Particles';
import { useTranslation } from 'react-i18next';



function App() {
  const [ans,setAns]=useState(0);
  const [inputVal,setInputVal]=useState(0);
  const msg = new SpeechSynthesisUtterance();
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
      <Particles/>
      <Stack ml={"33%"} mt={"5%"}> 
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>} mr={4} justifyContent="flex-end">
          <Button variant="text" onClick={() => changeLanguage('en')}>en</Button>
          <Button variant="text" onClick={() => changeLanguage('ur')}>ur</Button>
          <Button variant="text" onClick={() => changeLanguage('fr')}>fr</Button>
        </Stack>
        <Grid container direction="column" xs={3} m={2}>
          <Typography variant="h5" >{t('description')}</Typography>
          <Typography variant="h3">{ans}</Typography>
          <TextField sx={{width:350}} id="outlined-basic" value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} label={t('newValue')} variant="outlined" helperText={t('enterNewValueHere')} />
        </Grid>
        <Stack m={2} spacing={2} direction="row">
          <Button variant="contained" color="success" endIcon={<RecordVoiceOverIcon/>} onClick={readAloud}>{t('read')}</Button>
          <Button variant="contained" color="error" onClick={reset}>{t('reset')}</Button>
          <Button variant="contained" color="error" onClick={resetResult}>{t('resetResult')}</Button>
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
