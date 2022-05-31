import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import img1 from '../../img/img1.png'

const Admin = () => (

    <div className="container">
        
      

       
        

   
        <div class="container">
        <div class="row">
            <div class="col-12">
                <center>
                    <h1>Dashboard</h1>
                    <br /> <br /> 
                </center>
            </div>
        </div>

        <div class="row">
            
            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1}  />
                    <h4> <a href="/data">  View All Users </a></h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="/mcounterclass"> Create Marking Schema </a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="/allmarking"> All Marking Schemes </a> </h4>
                </center>
            </div>

        </div>

        <br /> <br />

        <div class="row">
            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1}  />
                    <h4> <a href="#"> Request Co-Supervisor  </a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1}  />
                    <h4> <a href="#"> Sumbit Documents </a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="/grpNotAssignDisplay"> Allocate Panel Members </a> </h4>
                </center>
            </div>

            <br /> <br />
        </div>
    </div>
   </div>        
   
)

export default Admin;
