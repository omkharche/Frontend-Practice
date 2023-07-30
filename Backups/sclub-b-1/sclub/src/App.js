import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Recipt from './Components/Recipt';
import React, {useState, useEffect} from 'react';
import {  
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  
  const [name , setName] = useState('-'); 
  const [email , setEmail] = useState('-'); 
  const [address , setAddress] = useState('-'); 
  const [stype , setStype] = useState('-'); 
  return (
    // <>
    //   <Navbar />
    //   <Home />
    //   <Footer/>
    // </>

    <>
      <Router>
        <Navbar />
        <br/>
        <Routes>
          <Route exact path="/" element={
              <>
                <Home/>
              </>
          }>
          </Route>
          <Route exact path="/About" element={
            <About />
          }>
          </Route>
          <Route exact path="/Recipt" element={
            <Recipt />
          }>
          </Route>

          <Route exact path="/Register" element={
            <Register />
          }>
          </Route>
          
          <Route exact path="/Contact" element={
            <Contact />
          }>
 
          </Route>

        </Routes>
        <br/><br/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
