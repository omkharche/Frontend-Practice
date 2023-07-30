import React from 'react'
import "./CSS/Navbar.css"
import {
    Link
  } from "react-router-dom";
  
import logo from "./Assets/Logo-bg.png"

export default function Navbar() {
  return (
    <>
        <nav>
            <div className="container-fluid NavP1">
                <div className='cl1'>
                    <img src={logo} alt="logo" className='logo'></img>
                </div>
                <div className='NavP2'>
                    <div class="dh">
                        <Link className="nav-link" to="/">Home</Link>
                    </div>
                    <div class="dh">
                        <Link className="nav-link" to="/About">About</Link>
                    </div>
                    <div class="dh">
                        Services
                    </div>
                    <div class="dh">
                        Programs
                    </div>
                    <div class="dh">
                        Blogs
                    </div>
                    <div class="dh">
                        Career
                    </div>
                    <div class="dh">
                        <Link className="nav-link" to="/Contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
