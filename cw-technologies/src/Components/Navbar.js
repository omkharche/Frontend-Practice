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
                    <div>
                        Home
                    </div>
                    <div>
                        About
                    </div>
                    <div>
                        Services
                    </div>
                    <div>
                        Programs
                    </div>
                    <div>
                        Blogs
                    </div>
                    <div>
                        Career
                    </div>
                    <div>
                        Contact Us
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
