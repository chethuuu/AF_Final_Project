import React from 'react';

import img1 from '../../img/img1.png'
import img10 from '../../img/img10.png'

const supHome = () => {
    return (
        <div class="container my-0 py-3">
            <div className="row">
                <div className="col-12">
                    <div className='col-12'>
                        <h1 className='display-6 text-center mb-4'> <b> Supervisor DashBoard </b></h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-md-4">
                    <center>
                        <img width="300px" src={img10} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="/viewtopicsup"> View Requests </a></h4>
                    </center>
                </div>

                <div class="col-md-4">
                    <center>
                        <img width="300px" src={img1} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="/viewusereq"> View Research Document </a> </h4>
                    </center>
                </div>

                <div class="col-md-4">
                    <center>
                        <img width="300px" src={img1} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="#">  Download Marking Scheme </a> </h4>
                    </center>
                </div>
            </div>

            <br /> <br />

            <div class="row">
                <div class="col-md-4">
                    <center>
                        <img width="300px" src={img1} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="#"> Chat with Groups </a> </h4>
                    </center>
                </div>

                <div class="col-md-4">
                    <center>
                        <img width="300px" src={img1} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="#"> Evaluate Document </a> </h4>
                    </center>
                </div>

                <div class="col-md-4">
                    <center>
                        <img width="300px" src={img1} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="#"> Inventory Management </a> </h4>
                    </center>
                </div>

                <br /> <br />




            </div>
        </div>
    )

}

export default supHome;
