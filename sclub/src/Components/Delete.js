import React from 'react';
import axios from 'axios';
import  {useState, useEffect} from 'react';
export default function Delete({}) {

    let container = {
        width:'60%',
        marginLeft: '20%'
    }

    const [id , setId] = useState(''); 
    
    const onDelete = ()=>{
        // alert("Register 😍\nName: "+name+"\nEmail: "+email+"\nMobile No: "+mno);

        if(id.length === 0 )
        {
            alert("ID has left Blank!");
        }
        else 
        {
            alert("User with Id: "+id+" is deleted successfully");
            const url='http://localhost/test/delete.php';
            let fData = new FormData();
            fData.append('id',id);
            axios.post(url,fData).then(response=> alert(response.data)).catch(error=> {
                console.log(error.toJSON());
            }) 
        }
    }

    return (
    
    <>
         <div classNameName="container" style={container}>
            <br></br>
            <center><span className='sp1' >Delete</span><br></br></center><br></br>
            
                <form>
                <div className="mb-3">
                    <label className="form-label">User ID </label>
                    <input type="number" className="form-control" id="tuid" onChange={(e)=>setId(e.target.value)}></input>
                </div>   
                <center><button type="submit" className="btn btn-primary" onClick={()=>{onDelete()}} >Submit</button></center>
            </form>
        </div>
    </>
  )
}

