import './App.css';
import Navbar from '\./MyComponent/Navbar';
import React, {useState} from 'react';
import Todos from './MyComponent/Todos';

function App() {
  const [mode , setMode] = useState('light'); 
  const toggleMode = () =>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color= 'black';
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor = '#011840';
      document.body.style.color= 'white';
    }
  }

  // Todos array
  let todos = [
    {
      sno :1,
      title : "Go to market",
      desc : "Go market and complete job 1"
    },
    {
      sno :2,
      title : "Go to gym",
      desc: "Go gym and complete job 2"
    },
    {
      sno :3,
      title : "Go to amazon",
      desc : "Go amazon and complete job 3"
    }
  ]

  const onDelete = (todos)=> {
    console.log("I am On Delete of todo ",todos)
  }

  return (
    <>
       <Navbar title="TODO's List" mode={mode} toggleMode={toggleMode} />
       <br/>
       <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
