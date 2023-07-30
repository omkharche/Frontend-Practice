import React from 'react'
export default function Contact({}) {

    let container = {
        width:'60%',
        marginLeft: '20%'
        
    }
    return (
    <>  

        <br></br><br></br>
        <div classNameName="container" style={container}>
            <center><h3 className='sp1'>Contact Us</h3></center>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputemail1"></input>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Comment</label>
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
             </form>
        </div>
    </>
  )
}

