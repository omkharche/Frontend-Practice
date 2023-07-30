import React from 'react'
import {
    Link
  } from "react-router-dom";
  import axios from 'axios';
  import "./CSS/Register.css"
import  {useState, useEffect} from 'react';
import App from '../App';
export default function Register({}) {

    let container = {
        width:'60%',
        marginLeft: '20%'
    }

    const [name , setName] = useState(''); 
    const [fname , setFname] = useState(''); 
    const [mobile , setMno] = useState(''); 
    const [address , setAddress] = useState(''); 
    const [rphno , setRphno] = useState(' '); 
    const [dob , setDOB] = useState(''); 
    const [clg , setClg] = useState(' '); 
    const [sport , setSport] = useState('');
    const [timing , setTiming] = useState('');  
    const [timefrom , setTimefrom] = useState('');  
    const [timeto , setTimeto] = useState('');  
    const [timeapm , setTimeapm] = useState('');  
    

    const onRegister = ()=>{
        // alert("Register 😍\nName: "+name+"\nEmail: "+email+"\nMobile No: "+mno);

        if(name.length === 0 )
        {
            alert("Name has left Blank!");
        }
        else if(fname.length === 0 )
        {
            alert("Son Daughter of has left Blank!");
        }
        else if(address.length === 0 )
        {
            alert("Address of has left Blank!");
        }
        else if(mobile.length === 0 )
        {
            alert("Mobile number has left Blank!");
        }
        else if(dob.length === 0 )
        {
            alert("Date of birth has left Blank!");
        }
        else if(sport.length === 0 )
        {
            alert("Registration for left Blank!");
        }
        else if(timing.length === 0 )
        {
            alert("Timing has left Blank!");
        }

        else 
        {
            const url='http://localhost/test/formsubmit.php';
            let fData = new FormData();
            fData.append('name',name);
            fData.append('fname', fname);
            fData.append('mobile',mobile);
            fData.append('address',address);
            fData.append('rphno',rphno);
            fData.append('dob',dob);
            fData.append('sport',sport);
            fData.append('timing',timing);
            axios.post(url,fData).then(response=> alert(response.data)).catch(error=> {
                alert(error);
                console.log(error.toJSON());
            })
        }
    }


    return (
    <>  
        <br></br><br></br>
        <div classNameName="container" style={container}>
            <center><h3 className='sp1'>Register</h3></center>
            <form>
                <div className="mb-3">
                    <label className="form-label">Registration Number</label>
                    <input type="number" className="form-control" id="trno" value="0001" disabled></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Applicant's Name</label>
                    <input type="text" className="form-control" id="tname" onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Son/Daughter of</label>
                    <input type="text" className="form-control" id="tfname" onChange={(e)=>setFname(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Local Address</label>
                    <input type="text" className="form-control" id="taddress" onChange={(e)=>setAddress(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Residential Phone No. </label>
                    <input type="number" className="form-control" id="tphno" onChange={(e)=>setRphno(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input type="number" className="form-control" id="tmno" onChange={(e)=>setMno(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" id="tdob" onChange={(e)=>setDOB(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">School/College (if any)</label>
                    <input type="text" className="form-control" id="tclg" onChange={(e)=>setClg(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Sport/Game Opted</label>
                    <div class="input-group mb-3">
                    <select class="form-select" id="inputGroupSelect01" value={sport} onChange={(e)=>setSport(e.target.value)}>
                        <option selected>Choose...</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Sketing">Sketing</option>
                        <option value="Zumba">Zumba</option>
                    </select>
                </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Timing Opted</label>
                    <div className='timeflex'>
                    <input type="text" className="form-control" id="ttimeto" placeholder='from' onChange={(e)=>settiming(e.target.value)}></input>
                    <input type="text" className="form-control" id="ttimefrom" placeholder='to' onChange={(e)=>settiming(e.target.value)}></input>
                    <select class="form-select" id="inputGroupSelect02" /*value={}*/ onChange={(e)=>setSport(e.target.value)}>
                        <option value="am">am</option>
                        <option value="pm">pm</option>
                    </select>
                    </div>

                </div>
                <br></br><br></br>
                {/* <Link className="nav-link" to="/Recipt"><button type="submit" className="btn btn-primary">Submit</button></Link> */}

                <button type="submit" className="btn btn-primary" onClick={()=>{onRegister()}} >Submit</button>

             </form>
        </div>
    </>
  )
}

