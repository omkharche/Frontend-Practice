import React from 'react'
import ub1 from './Assets/ub1.png'
import "./CSS/Home.css"
import "./CSS/resp.css"
import "./CSS/Navbar.css"
import {
    Link
  } from "react-router-dom";
export default function Home() {
  let box = document.querySelector('.slider-img');
  const btnnext = () => {
    let width=box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  }
const btnprev = () => {
  let width=box.clientWidth;
  box.scrollLeft = box.scrollLeft - width;
}

  return (
    <>
        <div className='container-fluid hc1'>
            <div class='d1'>
                <p id='s1'>Smashing Your Way to Excellence 🏸  </p>
                <p className='s2'><span className='auto-type'>Welcome to Achiverse Badminton Club, where passion and precision meet on the court. Our club is dedicated to nurturing talent, fostering teamwork, and creating an environment where players can unleash their full potential. Join us today and experience the thrill of smashing your way to excellence in the world of badminton.</span></p>
                <Link className="nav-link" to="/Register"><input type="button" className='btn1' value="Register Now" /></Link>
            </div>
            <div class='d2'>
                <img src={ub1} class="cs1" alt="sports"></img>
            </div>
        </div>

        <div className='icon-div'>
          <div className="line-1"></div> 
          <i class="fa-solid fa-angles-down fa-bounce icon1-css"></i>
          <div className="line-2"></div>  
        </div>
        
        <div className="s-div">
          <span className='sp1'>Welcome to Achievers Badminton Club</span><br></br>
          <span className='sp2'>Unleash Your Shuttlecock Skills!</span><br></br>
          <p className='sp3'>
          Achiverse Badminton Club is a premier destination for<span className="sp4"> badminton enthusiasts </span>of all skill levels. We provide <span className="sp4">top-notch facilities, expert coaching, and a vibrant community</span> hat fosters growth, competition, and a love for the sport. Join us to <span className="sp4">elevate your game, </span>connect with fellow players, and be a part of the Achiverse badminton experience.        
         </p> 
         </div>
         <div className='c-div'>
          <div className='cd1'>
              <img className='cimg1' src='https://www.tutorialspoint.com/badminton/images/badminton_racket.jpg' alt="img1"></img>  
              <p className='cp1'>Badminton</p>
              <p className='cp2'>Elevate your game and master the art of precision and agility on the court.</p><br></br><br></br>
          </div>
          <div className='cd1'>
              <img className='cimg1' src='https://www.shape.com/thmb/faSAJkM5vjRfC3elLmAfAM4EIjM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roller-skating-quarantine-a5fdd37e78a5491fb24efd773dd1cce7.jpg' alt="img1"></img>  
              <p className='cp1'>Sketing</p>
              <p className='cp2'>Glide and spin your way to graceful movements while enjoying the exhilarating thrill of skating.</p><br></br>
        </div>
          <div className='cd1'>
              <img className='cimg1' src='https://u7.uidownload.com/vector/132/60/vector-zumba-dance-vectors-ai.jpg' alt="img1"></img>  
              <p className='cp1'>Zumba​</p>
              <p className='cp2'>Shake, groove, and sweat your way to fitness with energetic and fun-filled Zumba workouts that combine dance and fitness elements..</p><br></br>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
            
      </> 
  )
  
}
