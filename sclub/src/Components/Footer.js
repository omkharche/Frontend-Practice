import React from 'react'
import logo from "./Assets/SLogo.png"
export default function Footer() {
  return (
    <>
        
            <footer>
                <div className='f-div'>
                  <br></br><br></br>
                  
                  <p class="tp11"><img src={logo} alt="logo" className='logo'></img>Achievers Badminton Club</p>
                  <br></br> 
                  <div className="footer-details container">
                  <div className='row1'>

                    <div className='co1'>
                      <ul className='list1'>
                        <li className='fh'>
                          Quick Links
                        </li>
                        <li className='fd'>
                          Services
                        </li>
                        <li className='fd'>
                          Privacy Policy
                        </li>
                        <li className='fd'>
                          Events
                        </li>
                        <li className='fd'>
                          Blogs
                        </li>
                      </ul>

                    </div>
                  </div>
                  <div className='row1'>
                    <div className='co1'>
                      <ul className='list1'>
                        <li className='fh'>
                          Useful Links
                        </li>
                        <li className='fd'>
                          Contact Us
                        </li>
                        <li className='fd'>
                          About Us
                        </li>
                        <li className='fd'>
                          Home
                        </li>
                        <li className='fd'>
                          Admissions
                        </li>
                      </ul>

                    </div>
                  </div>
                  <div className='row'>
                    <div className='co1'>
                      <ul className='list1'>
                        <li className='fh'>
                          Working Hours
                        </li>
                        <li className='fd'>
                          10:30am – 8:00pm
                        </li>
                        <li className='fd'>
                          Monday to Saturday
                        </li>
                        <li className='fd'>
                          The Company is Closed on Sundays
                        </li>
                      </ul>

                    </div>
                  </div>
                  <div className='row'>
                    <div className='co1'>
                      <ul className='list1'>
                        <li className='fh'>
                          Contact Us
                        </li>
                        <li className='fd'>
                          +91-9021070048
                        </li>
                        <li className='fd'>
                          info@achievers.in
                        </li>
                        <li className='fd'>
                          Shankar Nagar Chowk, Nagpur-443101
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='row2'>
                    <div className='co1'>
                      <ul className='list1'>
                        <li className='fh'>
                          Follow
                        </li>
                        <li className='fd1'>
                        <i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;
                        <i class="fa-brands fa-facebook"></i>
                        </li>
                        <li className='fd1'>
                        <i class="fa-brands fa-twitter"></i>&nbsp;&nbsp;
                        <i class="fa-brands fa-youtube"></i>
                        </li>
                        <li className='fd1'>
                        <i class="fa-brands fa-linkedin-in"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='line'></div>
                <p className='rights'>2023 All rights are reserved @Achievers_Badminton_Club</p>
                <br></br>
              </div>
            </footer>

    </>
  )
}
