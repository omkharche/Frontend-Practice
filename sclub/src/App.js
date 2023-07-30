import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import RecretionalRegister from './Components/Register';
import CoachingRegister from './Components/RegisterCoaching';
import Recipt from './Components/Recipt';
import Dashboard from './Components/Dashboard';
import Update from './Components/Update';
import Delete from './Components/Delete';
import Header from './Components/Header';
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
        <Header />
       
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

          <Route exact path="/RecretionalRegister" element={
            <RecretionalRegister />
          }>
          </Route>

          <Route exact path="/CoachingRegister" element={
            <CoachingRegister />
          }>
          </Route>

          <Route exact path="/Update" element={
            <Update />
          }>
          </Route>
          
          <Route exact path="/Contact" element={
            <Contact />
          }>
          </Route>

          <Route exact path="/Dashboard" element={
            <Dashboard />
          }>
          </Route>

          <Route exact path="/Delete" element={
            <Delete />
          }>

          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
