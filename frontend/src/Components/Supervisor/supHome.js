import React from 'react';
import img1 from '../../img/img1.png'

const supHome = () => (

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
                    <img width="300px" src={img1} />
                    <h4> <a href="/viewtopicsup"> View Requests </a></h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="/viewusereq"> View Research Document </a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="#">  Production Management </a> </h4>
                </center>
            </div>
        </div>

        <br /> <br />

        <div class="row">
            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="#"> Growthroom </a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="#"> Delivery Management </a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="#"> Inventory Management </a> </h4>
                </center>
            </div>

             <br /> <br />




        </div>
    </div>

)

export default supHome;
