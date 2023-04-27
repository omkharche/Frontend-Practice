import './App.css';
import Navbar from './MyComponent/Navbar';
import React, {useState, useEffect} from 'react';
import Todos from './MyComponent/Todos';
import Footer from './MyComponent/Footer';
import AddTodo from './MyComponent/AddTodo';
import About from './MyComponent/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo = [];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }

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
  const [todos, setTodos] =useState (initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  

  const onDelete = (todo)=> {
    console.log("I am On Delete of todo ",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title, desc) =>{
    console.log("I am adding a todo", title, desc)
    let sno;
    if(todos.length===0)
    {
      sno=1;
    }
    else
    {
      sno=todos[todos.length-1].sno+1;
    }
     
    const myTodo = {
      sno : sno,
      title:title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
  }

  return (
    <>
      <Router>
        <Navbar title="TODO's List" mode={mode} toggleMode={toggleMode} />
        <br/>
        <Routes>
          <Route exact path="/" element={
              <>
                <AddTodo addTodo={addTodo} />
                <br/>
                <Todos todos={todos} onDelete={onDelete} />
              </>
            
          }>
          </Route>
          <Route exact path="/about" element=<About />>
            
          </Route>
        </Routes>
        <br/><br/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
