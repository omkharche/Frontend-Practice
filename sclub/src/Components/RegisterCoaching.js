import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/Register.css';

export default function Register() {
  const containerStyle = {
    width: '60%',
    marginLeft: '20%',
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate('/Recipt');
  }

  const [user, setUser] = useState([]);

  const loadUser = async () => {
    const result = await axios.get('http://localhost/test/getid.php');
    setUser(result.data.phpresult);
    console.log(result.data.phpresult);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const [name, setName] = useState('');
  const [fname, setFname] = useState('');
  const [mobile, setMno] = useState('');
  const [address, setAddress] = useState('');
  const [rphno, setRphno] = useState('');
  const [dob, setDOB] = useState('');
  const [clg, setClg] = useState('');
  const [sport, setSport] = useState('');
  const [time, setTime] = useState('');
  const [joiningDate, setJoiningdate] = useState('');
  const [status , setStatus] = useState('');


    const onRegister = ()=>{
        // alert("Register 😍\nName: "+name+"\nEmail: "+email+"\nMobile No: "+mno);

    if(status.length === 0 ) {
      alert("Please select your Proficiency Level!");
    } else if(name.length === 0 ) {
      alert("Name has left Blank!");
    } else if (fname.length === 0) {
      alert("Son/Daughter's name has been left blank!");
    } else if (address.length === 0) {
      alert('Address has been left blank!');
    } else if (mobile.length === 0) {
      alert('Mobile number has been left blank!');
    } else if (dob.length === 0) {
      alert('Date of birth has been left blank!');
    } else if (sport.length === 0) {
      alert('Registration option has been left blank!');
    } else if (time.length === 0) {
      alert('Timing has been left blank!');
    } else {
      alert('Registration Successful');

      const url = 'http://localhost/test/formsubmit.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('fname', fname);
      fData.append('mobile', mobile);
      fData.append('address', address);
      fData.append('rphno', rphno);
      fData.append('dob', dob);
      fData.append('clg', clg);
      fData.append('sport', sport);
      fData.append('timing', time);
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => {
          console.log(error.toJSON());
        });

      handleClick();
    }
  };

  return (
    <>
    <div>
      <br />
      <br />
      <br />
      <div className="container shadow-lg p-5 mb-5 bg-body-tertiary rounded" style={containerStyle}>
        <center>
          <h3 className="sp1">Register</h3>
        </center>
        <br />
      <br />
        <form>
          <div className="mb-3" style={{ display: 'flex' }}>
            <label className="form-check-label me-5">Experience Level:</label>
            <div className="form-check me-5">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Beginner
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Professional
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Joining</label>
            <input type="date" className="form-control" id="tdoj" onChange={(e) => setJoiningdate(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Registration Number</label>
            {user.map((res) => (
              <input key={res.id} type="number" className="form-control" id="trno" value={res.id} disabled />
            ))}
          </div>
          <div className="mb-3">
            <label className="form-label">Applicant's Name</label>
            <input type="text" className="form-control" id="tname" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Son/Daughter of</label>
            <input type="text" className="form-control" id="tfname" onChange={(e) => setFname(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Local Address</label>
            <input type="text" className="form-control" id="taddress" onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Residential Phone No.</label>
            <input type="number" className="form-control" id="tphno" onChange={(e) => setRphno(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input type="number" className="form-control" id="tmno" onChange={(e) => setMno(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="tdob" onChange={(e) => setDOB(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">School/College (if any)</label>
            <input type="text" className="form-control" id="tclg" onChange={(e) => setClg(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Sport/Game Opted</label>
            <div className="input-group mb-3">
              <select className="form-select" id="inputGroupSelect01" value={sport} onChange={(e) => setSport(e.target.value)}>
                <option value="">Choose...</option>
                <option value="Badminton">Badminton</option>
                <option value="Sketing">Skating</option>
                <option value="Zumba">Zumba</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Timing Opted</label>
            <div className="timeflex">
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect01" value={time} onChange={(e) => setTime(e.target.value)}>
                  <option value="">Choose...</option>
                  <option value="5 to 6 am">5 to 6 am</option>
                  <option value="6 to 7 am">6 to 7 am</option>
                  <option value="7 to 8 am">7 to 8 am</option>
                  <option value="8 to 9 am">8 to 9 am</option>
                  <option value="9 to 10 am">9 to 10 am</option>
                  <option value="10 to 11 am">10 to 11 am</option>
                  <option value="11 to 12 am">11 to 12 am</option>
                  <option value="12 to 1 pm">12 to 1 pm</option>
                  <option value="1 to 2 pm">1 to 2 pm</option>
                  <option value="2 to 3 pm">2 to 3 pm</option>
                  <option value="3 to 4 pm">3 to 4 pm</option>
                  <option value="4 to 5 pm">4 to 5 pm</option>
                  <option value="5 to 6 pm">5 to 6 pm</option>
                  <option value="6 to 7 pm">6 to 7 pm</option>
                  <option value="7 to 8 pm">7 to 8 pm</option>
                  <option value="8 to 9 pm">8 to 9 pm</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <br />
          <center>
            <button type="submit" className="btn btn-primary" onClick={onRegister}>
              Submit
            </button>
          </center>
        </form>
      </div>
      </div>
    </>
  );
}
