import React from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <TextField id = "textbox" label = "Company Symbol"></TextField>
      <Button variant = "contained" color = "primary">Quote!</Button>
    </div>
  );
}

export default App;
