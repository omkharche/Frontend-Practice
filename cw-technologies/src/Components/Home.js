import React from 'react'
import ub1 from './Assets/ub1.png'
import "./CSS/Home.css"
export default function Home() {
  return (
    <>
        <div className='container-fluid hc1'>
            <div>
                <p id='s1'>We Design Digital platforms and brands with Future Trends</p>
                <p className='s2'><span className='auto-type'>Hello</span></p>
            </div>
            <div>
                <img src={ub1} class="cs1" alt="guy on laptop"></img>
            </div>
        </div>

        <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
        <script>
            var typed = new Typed('.auto-type', (
             strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
            typeSpeed: 50,
            ));

        </script>

    </>
  )
}
