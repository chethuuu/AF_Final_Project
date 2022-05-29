import React from 'react';
import img1 from '../../img/img1.png'

const studentHome = () => (

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
                    <h4> <a href="/createGrp"> Create Student Groupsssss </a></h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="/viewtopic"> Register for Research Topic </a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="/viewtopic"> Request Co-Supervisor </a> </h4>
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
                    <h4> <a href="/uploadFiles"> Sumbit Documents </a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="#"> Download Templates </a> </h4>
                </center>
            </div>

            <br /> <br />




        </div>
    </div>

)

export default studentHome;
