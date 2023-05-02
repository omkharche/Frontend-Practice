import React from 'react'
import "./CSS/Navbar.css"
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
                        Home
                    </div>
                    <div class="dh">
                        About
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
                        Contact Us
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
