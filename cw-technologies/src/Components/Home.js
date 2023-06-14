import React from 'react'
import ub1 from './Assets/ub1.png'
import "./CSS/Home.css"
import "./CSS/resp.css"
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
                <p id='s1'>We Design Digital platforms and brands with Future Trends 🚀 </p>
                <p className='s2'><span className='auto-type'>Designing with future trends creates innovative and engaging digital experiences. Requires understanding of market trends, user needs, and emerging technologies. Adaptability, flexibility, and innovation are key.</span></p>
                <input type="button" className='btn1' value="Explore More" />
            </div>
            <div class='d2'>
                <img src={ub1} class="cs1" alt="guy on laptop"></img>
            </div>
        </div>

        <div className='icon-div'>
          <div className="line-1"></div> 
          <i class="fa-solid fa-angles-down fa-bounce icon1-css"></i>
          <div className="line-2"></div>
        </div>
        <div className="s-div">
          <span className='sp1'>Welcome to CW Technology Services</span><br></br>
          <span className='sp2'>Business Secrets for your Success</span><br></br>
          <p className='sp3'>AnkHub Services Technology  is an<span className="sp4"> innovative team </span>who would be providing services to its client <span className="sp4">globally,</span> promoted by <span className="sp4">professionals</span> having rich expression in <span className="sp4">business intelligent, consulting,  staffing, outsourcing,</span> and <span className="sp4">training domain</span> specializes in the Business of <span className="sp4">infrastructure services</span> and <span className="sp4">talent management solutions</span>.</p>
        </div>
        
        <div className='c-div'>
          <div className='cd1'>
              <img className='cimg1' src='https://ankhub.in/wp-content/uploads/2023/02/Inudstry.png' alt="img1"></img>  
              <p className='cp1'>Industry Experts</p>
              <p className='cp2'>Get trained from our industry experts.</p><br></br><br></br>
          </div>
          <div className='cd1'>
              <img className='cimg1' src='https://ankhub.in/wp-content/uploads/2023/02/Inudstry1.png' alt="img1"></img>  
              <p className='cp1'>Affordable Courses</p>
              <p className='cp2'>From students to professionals we provide affordable courses</p><br></br>
        </div>
          <div className='cd1'>
              <img className='cimg1' src='https://ankhub.in/wp-content/uploads/2023/02/Inudstry2.png' alt="img1"></img>  
              <p className='cp1'>Efficient & Flexible​</p>
              <p className='cp2'>Efficient product handling and flexible timings.</p><br></br>
          </div>
        </div>

        <div className='t-div'>
          <br></br>
            <p className='ts1'>Technologies We Work...</p>
            <div className='tflex'>
              <div className='tf1'>
                <img className='timg' src="https://ankhub.in/wp-content/uploads/2022/09/New-App-Devleopment.png" alt="timg"></img>
                <br></br><div className='tp1'>App Development</div>
              </div>
              <div className='tf1'>
                <img className='timg' src="https://ankhub.in/wp-content/uploads/2022/09/New-Wordpress.png" alt="timg"></img>
                <br></br><div className='tp1'>WordPress Development</div>
              </div>
              <div className='tf1'>
                <img className='timg' src="https://ankhub.in/wp-content/uploads/2022/09/New-java.png" alt="timg"></img>
                <br></br><div className='tp1'>Java Development</div>
              </div>
              <div className='tf1'>
                <img className='timg' src="https://ankhub.in/wp-content/uploads/2022/09/New-Networking.png" alt="timg"></img>
                <br></br><div className='tp1'>Networking</div>
              </div>
              <div className='tf1'>
                <img className='timg' src="https://ankhub.in/wp-content/uploads/2022/09/new-Cloud.png" alt="timg"></img>
                <br></br><div className='tp1'>Cloud Development</div>
              </div>
              <div className='tf1'>
                <img className='timg' src="https://ankhub.in/wp-content/uploads/2022/09/new-Linux.png" alt="timg"></img>
                <br></br><div className='tp1'>Linux</div>
              </div>
              <div className='tf1'>
                <img className='timg' src="https://ankhub.in/wp-content/uploads/2022/09/New-Digital-Marketing.png" alt="timg"></img>
                <br></br><div className='tp1'>Digital Marketing</div>
              </div>
              <div className='tf1'>
                <img className='timg' src="https://ankhub.in/wp-content/uploads/2022/09/new-Php.png" alt="timg"></img>
                <br></br><div className='tp1'>PHP Development</div>
              </div>
            </div>
            <br></br>
            </div>
            
            
            <span className='o1'><u><p className='op'>Our Projects</p></u></span>
            <p className='o3'>Our team work closely with clients to deliver <br></br> guaranteed returns on their investments ensuring 100% clients satisfaction.</p>
            
            
            <div>
              <div className='slider'>
              <button className='moveleft' onClick={btnprev}><p><i class="fa-solid fa-chevron-left"></i></p></button>
                <button className='moveright' onClick={btnnext}><p><i class="fa-solid fa-chevron-right"></i></p></button>
              
                <br></br>
                <div className='slider-img'>
                  <img className='simg' src="https://ankhub.in/wp-content/uploads/2022/08/chaatrapati-digimark-150x150.png"></img>
                  <img className='simg' src="https://ankhub.in/wp-content/uploads/2022/08/network-hub-150x150.png"></img>
                  <img className='simg' src="https://ankhub.in/wp-content/uploads/2022/08/Pa-Logo-Nivi-150x150.png"></img>
                  <img className='simg' src="https://ankhub.in/wp-content/uploads/2022/08/Patkhange-150x150.png"></img>
                  <img className='simg' src="https://ankhub.in/wp-content/uploads/2022/08/inner-bright-logo-150x150.png"></img>
                  <img className='simg' src="https://ankhub.in/wp-content/uploads/2022/08/Political-Wazier-150x150.png"></img>
                  <img className='simg' src="https://ankhub.in/wp-content/uploads/2022/08/SP-pro-tech-150x150.png"></img>
                  <img className='simg' src="https://ankhub.in/wp-content/uploads/2022/08/15122452345-150x150.png"></img>
                  <img className='simg' src="https://ankhub.in/wp-content/uploads/2022/08/Adarsh-Learning-150x150.png"></img>
                  <img className='simg' src="https://ankhub.in/wp-content/uploads/2022/08/ambience-garden-150x150.png"></img>
                </div>
              </div>
            </div>
            <br></br><br></br>
            <footer>
              <div className='f-div'>
                <p className='sm1'>. </p>
                <div className='subbox'>
                  <div className='sb1'>   
                  <p className='sf1'>Subscribe to our Newsletter!</p>
                    <p className='sf2'>Get the latest updates and offers from our firm<br></br>
                    right in your email.</p>
                  </div>
                  <div className='sb2'>
                    <input type='email' className='textbox-em'></input>
                    <button className='btn12'>Submit</button>
                  </div>
                </div>
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
                          Internships
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
                          Career
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
                          info@cwtech.in
                        </li>
                        <li className='fd'>
                          Hinjewadi Phase 3, Pune, India
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='row'>
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
                <p className='rights'>2023 All rights are reserved @CW_Technologies</p>
                <br></br>
              </div>
            </footer>

      </> 
  )
  
}
