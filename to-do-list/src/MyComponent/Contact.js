import React from 'react'
export default function Contact({}) {

    let footerStyle = {
        position:'absolute',
        width:'100%'
    }
    return (
    <>
        <div className="container">
            <form action="index.php" method="post">
                <h1 style="text-align: center; margin-top: 10%;">Contact</h1>
                <input className="c1" type="text" name="ftext" value="12" id="ftext" placeholder="Name">
                <input className="c1" type="number" name="fage" id="fage" value="12" placeholder="Age">
                <input className="c1" type="number" name="fphone" id="fphone" value="12" placeholder="Phone no">
                <button className="c1">Submit</button>
            </form> 
        </div>
    </>
  )
}

