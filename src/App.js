import './App.css';
import { useState } from 'react';
import {Stack , Grid,Button, TextField,Typography} from "@mui/material";
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function App() {
  const [ans,setAns]=useState(0);
  const [inputVal,setInputVal]=useState(0);
  const msg = new SpeechSynthesisUtterance();
  const Op={
    "fullScreen": {
        "enable": true,
        "zIndex": -1
    },
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": false,
                "value_area": 1000
            }
        },
        "color": {
          "value": "#808080"
        },           
        "size": {
            "value": 4,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "rotate": {
            "value": 0,
            "random": true,
            "direction": "clockwise",
            "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 600,
            "color": "#808080",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": ["grab"]
            },
            "onclick": {
                "enable": false,
                "mode": "bubble"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "background": {
        "color": "#FFFFFF",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    }
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
  
  const particlesInit = async (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="App">
      
      {/* Particles.js */}
      <Particles
      id="tsparticles"
      init={particlesInit}
      options={Op}
    />

      <Stack ml={"33%"} mt={"5%"}> 
        <Grid container direction="column" xs={3} m={2}>
          <Typography variant="h5" >Simplest and Cutest Calculator</Typography>
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
