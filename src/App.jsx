import { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'

function App() {
 
let handleClick=()=>{
  console.log("button was clicked!");
}
  return (
    <>
      
      <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handleClick} startIcon={<DeleteIcon/>}>
        Delete!
        </Button>
        &nbsp;
        <Button variant="contained" onClick={handleClick} color='success' size='large'>
        Click me2!
        </Button>
    </>
  )
}

export default App
