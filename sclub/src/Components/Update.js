import React from 'react';
import axios from 'axios';
import  {useState, useEffect} from 'react';
export default function Update({}) {

    let container = {
        width:'60%',
        marginLeft: '20%'
    }


    const [id , setId] = useState(''); 
    const [fupdate , setFupdate] = useState(''); 
    const [dupdate , setDupdate] = useState(''); 
    
    const onUpdate = ()=>{
        // alert("Register 😍\nName: "+name+"\nEmail: "+email+"\nMobile No: "+mno);

        if(id.length === 0 )
        {
            alert("ID has left Blank!");
        }
        else if(fupdate.length === 0 )
        {
            alert("Filed to update has left Blank!");
        }
        else if(dupdate.length === 0 )
        {
            alert("Data to update has left Blank!");
        }
        else 
        {
            alert("Data Updated");
            const url='http://localhost/test/update.php';
            let fData = new FormData();
            fData.append('id',id);
            fData.append('fupdate', fupdate);
            fData.append('dupdate',dupdate);
            axios.post(url,fData).then(response=> alert(response.data)).catch(error=> { 
                console.log(error.toJSON());
            }) 
        }
    }

    return (
    
    <>
         <div classNameName="container" style={container}>
            <br></br>
            <center><span className='sp1' >Update</span><br></br></center><br></br>
            <div className="mb-3">
               
                    <label className="form-label">User ID </label>
                        <input type="number" className="form-control" id="tuid" onChange={(e)=>setId(e.target.value)}></input>
                </div>
                <form>
                    <div className="mb-3">
                            <label className="form-label">Field to update </label>
                            <div class="input-group mb-3">
                            <select class="form-select" id="inputGroupSelect01" value={fupdate} onChange={(e)=>setFupdate(e.target.value)}>
                            <option selected>Choose...</option>
                            <option value="name">Applicant's Name</option>
                            <option value="fname">Son/Daughter of </option>
                            <option value="address">Local Address</option>
                            <option value="mobile">Mobile Number</option>
                            <option value="rphno">Residential Phone No.</option>
                            <option value="dob">Date of Birth</option>
                            <option value="clg">School/College</option>
                            <option value="sport">Sport/Game Opted</option>
                            <option value="timing">Timing Opted</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Data to update</label>                    
                        <input type="text" className="form-control" id="tufield" onChange={(e)=>setDupdate(e.target.value)}></input>
                    </div>
                    <center>
                        <button type="submit" className="btn btn-primary" onClick={()=>{onUpdate()}} >Submit</button>
                    </center>
                </div>
            </form>
        </div>
    </>
  )
}

