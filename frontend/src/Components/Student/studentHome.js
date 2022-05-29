import React from 'react';
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img3 from '../../img/img3.png'
import img4 from '../../img/img4.png'
import img5 from '../../img/img5.png'

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
                    <img width="240px" src={img3}  />
                    <h4> <a href="/createGrp"> Create Student Groups </a></h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="310px" src={img1} />
                    <h4> <a href="/viewtopic"> Register for Research Topic </a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="150px" src={img5} />
                    <h4> <a href="/viewreg"> Request Supervisor </a> </h4>
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
                    <img width="220px" src={img2}  />
                    <h4> <a href="#"> Sumbit Documents </a> </h4>
                </center>
            </div>
            <div class="col-md-4">
                <center>
                    <img width="300px" src={img4} />
                    <h4> <a href="#"> Download Templates </a> </h4>
                </center>
            </div>
            <br /> <br />
        </div>
    </div>

)

export default studentHome;
