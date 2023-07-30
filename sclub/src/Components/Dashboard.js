import axios from 'axios';
import "./CSS/Dashboard.css"
import  {useState, useEffect} from 'react';
import {
    Link
  } from "react-router-dom";
export default function Dashboard({}) {

    const [user, setUser] = useState([]);
    const loadUser = async () => {
        const result = await axios.get("http://localhost/test/view.php");
        setUser(result.data.phpresult);
        console.log(result.data.phpresult); 
    }
    useEffect(() => {
        loadUser();
    }, []);     

    return (    
    <>
        <p className='sp1' >Dashboard</p>
        <br></br>
        <div className='button-adjust'>
            <Link className="nav-link" to="/Dashboard"><button type="button" class="btn btn-outline-primary">Refresh</button></Link>
            <Link className="nav-link" to="/Update"><button type="button" class="btn btn-outline-primary">Update</button></Link>
            <Link className="nav-link" to="/Delete"><button type="button" class="btn btn-outline-primary">Delete</button></Link>
        </div>
        <br></br><br></br>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Parents Name</th>
                <th scope="col">Address</th>
                <th scope="col">Mobile No.</th>
                <th scope="col">Residential Ph. No.</th>
                <th scope="col">Date of birth</th>
                <th scope="col">Sport</th>
                <th scope="col">School/Clg</th>
                <th scope="col">Timing</th>
                <th scope="col">Timestamp</th>
                </tr>
            </thead>
            <tbody>
                {user.map((res)=>
                    <tr>
                        <td>{res.id}</td>
                        <td>{res.name}</td>
                        <td>{res.fname}</td>
                        <td>{res.address}</td>
                        <td>{res.mobile}</td>
                        <td>{res.rphno}</td>    
                        <td>{res.dob}</td>
                        <td>{res.clg}</td>                        
                        <td>{res.sport}</td>
                        <td>{res.timing}</td> 
                        <td>{res.timestamp}</td>                  
                    </tr>
                )}
            </tbody>
        </table>
    </>
  )
}

