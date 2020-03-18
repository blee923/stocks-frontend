import React from 'react';
import './App.css';
import {Button, TextField} from '@material-ui/core';
import axios from 'axios';

const url = 'http://localhost:5000';

function App() {
  return (
    <div className="App">
      <TextField id = "textbox" label = "Company Symbol"></TextField>
      <Button variant = "contained" color = "primary" style = {{marginTop: 10, marginLeft: 10}} onClick = {quote}>Quote!</Button>
    </div>
  );
}

function quote() {
  console.log("lmfao you clicked it");
  axios.get(url + '/quote')
}

export default App;
