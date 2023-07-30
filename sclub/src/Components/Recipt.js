import React from 'react';
import './CSS/Recipt.css';
import logo from "./Assets/SLogo.png";
export default function Recipt({}) {

    return (
    <>
        <center>
       <div class="col-md-12">   
          <div class="">
              
                  <div class="receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">

                      <div className='recipt_header'>
                       
                          <div className='logodiv'>
                            <img src={logo} alt="logo" className='logo cl1'></img>
                          </div>
                       
                      </div>
                      <br></br>
                      <div>
                          <table class="table table-bordered">
                              <thead>
                                  <tr>
                                      <th>Description</th>
                                      <th>Amount</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td class="col-md-9">Prosprectus Fee</td>
                                      <td class="col-md-3"><i class="fa fa-inr"></i> 100/-</td>
                                  </tr>
                                  <tr>
                                      <td class="col-md-9">Registration Fee</td>
                                      <td class="col-md-3"><i class="fa fa-inr"></i> 1000/-</td>
                                  </tr>
                                  <tr>
                                      <td class="col-md-9">Coaching Fee</td>
                                      <td class="col-md-3"><i class="fa fa-inr"></i> 2000/-</td>
                                  </tr>
                                   <tr>
                                    
                                      <td class="text-right"><h2><strong>Total: </strong></h2></td>
                                      <td class="text-left text-danger"><h2><strong><i class="fa fa-inr"></i> 3,100/-</strong></h2></td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                
                <div class="">
                  <div class="receipt-header receipt-header-mid receipt-footer">
                    <div class="col-xs-8 col-sm-8 col-md-8 text-left">
                      <div class="receipt-right">
                        <p><b> Date :</b> 09 Sep 2023</p>
                        <h5 style={{color: 'rgb(140, 140, 140)'}}>Thanks for shopping.!</h5>
                      </div>
                    </div>
                   
                  </div>
                      </div>
                
                  </div>    
            </div>
          </div>
         </center>  
    </>
  )
}

