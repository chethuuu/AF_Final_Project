import React from 'react';
import {Link } from 'react-router-dom';
import img1 from '../../img/img1.png'
import img9 from '../../img/img9.png'
import img1 from '../../img/img1.png'
import img9 from '../../img/img9.png'

const panelHome = () => {
    return (
        <div class="container my-0 py-3">
            <div className="row">
                <div className="col-12">
                    <div className='col-12'>
                        <h1 className='display-6 text-center mb-4'> <b> Panel Member DashBoard </b></h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                </div>
            </div>



        	<br/><br/>
            <div class="row">
                <div class="col-md-4">
                    <center>
                        <img width="250px" src={img9} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="/reseacrhtopic"> View Approved Research Topic </a></h4>
                    </center>
                </div>

                <div class="col-md-4">
                    <center>
                        <img width="330px" src={img1} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="#"> View Reject Research Topic </a> </h4>
                    </center>
                </div>

                <div class="col-md-4">
                    <center>
                        <img width="330px" src={img1} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="#">  Download Marking Scheme </a> </h4>
                    </center>
                </div>
            </div>
        </div>
    )
}


        	<br/><br/>
            <div class="row">
                <div class="col-md-4">
                    <center>
                        <img width="250px" src={img9} />
                        <Link className='navbar-brand fs-4 text-dark' to={`/markingSchemas`}><h4>Evaluate Marks</h4></Link>
                    </center>
                </div>

                <div class="col-md-4">
                    <center>
                        <img width="330px" src={img1} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="#"> View Reject Research Topic </a> </h4>
                    </center>
                </div>

                <div class="col-md-4">
                    <center>
                        <img width="330px" src={img1} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="#">  Download Marking Scheme </a> </h4>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default panelHome;