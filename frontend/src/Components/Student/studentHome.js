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
            <div class="col-md-3">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="/viewtopic"> Register for Research Topic </a> </h4>
                </center>
            </div>

            <div class="col-md-3">
                <center>
                    <img width="150px" src="https://www.kindpng.com/picc/m/201-2019458_tired-girl-cliparts-child-clipart-hd-png-download.png" />
                    <h4> <a href="#"> R&D Department </a></h4>
                </center>
            </div>

            <div class="col-md-3">
                <center>
                    <img width="150px" src="https://www.kindpng.com/picc/m/201-2019458_tired-girl-cliparts-child-clipart-hd-png-download.png" />
                    <h4> <a href="#">  Production Management </a> </h4>
                </center>
            </div>

            <div class="col-md-3">
                <center>
                    <img width="160px" src="https://www.kindpng.com/picc/m/201-2019458_tired-girl-cliparts-child-clipart-hd-png-download.png" />
                    <h4> <a href="#">  Media Preparation Unit </a> </h4>
                </center>
            </div>




        </div>

        <br /> <br />

        <div class="row">
            <div class="col-md-3">
                <center>
                    <img width="160px" src="Images/imgs/GR_10.png" />
                    <h4> <a href="#"> Growthroom </a> </h4>
                </center>
            </div>

            <div class="col-md-3">
                <center>
                    <img width="150px" src="Images/imgs/GR_06.png" />
                    <h4> <a href="#"> Delivery Management </a> </h4>
                </center>
            </div>

            <div class="col-md-3">
                <center>
                    <img width="210px" src="Images/imgs/GR_09.png" />
                    <h4> <a href="#"> Inventory Management </a> </h4>
                </center>
            </div>

            <div class="col-md-3">
                <center>
                    <img width="170px" src="Images/imgs/GR_07.png" />
                    <h4> <a href="#"> HR Management </a></h4>
                </center>
            </div> <br /> <br />




        </div>
    </div>

)

export default studentHome;
