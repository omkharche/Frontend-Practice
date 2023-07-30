import React from 'react'

import logo from "./Assets/SLogo.png"
import {
  Link
} from "react-router-dom";

export default function Header() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid ">
                <img src={logo} alt="logo" className='logo cl1'></img>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse NavP1" id="navbarSupportedContent">
                <ul class="navbar-nav ">
                    <li class="nav-item ">
                      <Link className="nav-link dh" to="/">Home</Link>
                    </li>
                    {/* <li class="nav-item">
                      <Link className="nav-link dh" to="/Register">Add</Link>
                    </li> */}
                    <li class="nav-item">
                      <Link className="nav-link dh" to="/Dashboard">Records</Link>
                    </li> 
                     
                    <li class="nav-item">
                      <Link className="nav-link dh" to="/">Gallery</Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link dh" to="/About">About</Link>
                    </li>
                    <li class="nav-item">
                      <Link className="nav-link dh" to="/Contact">Contact Us</Link>
                    </li>
                    <li class="nav-item dh dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Register
                        </a>
                        <ul class="dropdown-menu">
                          <li><Link className="dropdown-item" to="/CoachingRegister">Coaching</Link></li>
                          <li><Link className="dropdown-item" to="/RecretionalRegister">Recretional</Link></li>
                        </ul>
                      </li>
                </ul>
                </div>
            </div>
            </nav>
    </>
  )
}
