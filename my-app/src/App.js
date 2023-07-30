import logo from './logo.svg';
import './App.css';
import { set } from 'react-hook-form';
import { useState } from "react";


function App() {

const[form, setForm] = useState({});

const handleForm = (e)  => {
 setForm({
  ...form,
  [e.target.name] : e.target.value
 })
}

const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('http://localhost:8080/demo',{
    method:'POST',
    body:JSON.stringify(form),
    headers:{
      'Content-Type':'application/json'
    }
  })
  const data = await response.json();
  console.log(data);
}
  return (
    <>
    <p>{JSON.stringify(form)}</p>
      <form>
        <div class="mb-3">
          <label  class="form-label">Username : </label>
          <input type="text" name="username" class="form-control" id="id1" onChange={handleForm} />
        </div>
        <div class="mb-3">
          <label  class="form-label">Name : </label>
          <input type="text" name="password" class="form-control" id="id2" onChange={handleForm}/>
        </div>
        <button type="button"  class="btn btn-primary" onClick={handleSubmit} >Submit</button>
      </form>
    </>
  );
}

export default App;
