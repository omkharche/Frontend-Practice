import React from 'react'

import ub1 from './Assets/ub1.png'
import "./CSS/Home.css"

export default function Home() {
  return (
    <>
        <div className='container-fluid hc1'>
            <div class='d1'>
                <p id='s1'>We Design Digital platforms and brands with Future Trends 🚀 </p>
                <p className='s2'><span className='auto-type'>Designing with future trends creates innovative and engaging digital experiences. Requires understanding of market trends, user needs, and emerging technologies. Adaptability, flexibility, and innovation are key.</span></p>
                <input type="button" className='btn1' value="Explore More" />
            </div>
            <div class='d2'>
                <img src={ub1} class="cs1" alt="guy on laptop"></img>
            </div>
        </div>  
        
        <i class="fa-solid fa-chevrons-down"></i>
      
      </>
  )
}
