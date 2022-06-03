import React from 'react';
import { Link } from 'react-router-dom';
import img4 from '../../img/img4.png'
import img9 from '../../img/img9.png'


const panelHome = () => {
    return (


        <div>
            <div class="container my-0 py-3">
                <div className="row">
                    <div className="col-12">
                        <div className='col-12'>
                            <h1 className='display-6 text-center mb-4'> <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Panel Member DashBoard </b></h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                </div>

        	<br/><br/>
            <div class="row">
                <div class="col-md-4">
                    <center>
                        <img width="250px" src={img9} />
                        <Link className='navbar-brand fs-4 text-dark' to={`/markingSchemas`}><h4>Evaluate Marks</h4></Link>
                    </center>
                </div>
                <br /><br />
                <div class="row">
                    <div class="col-md-4">
                        <center>
                            <img width="250px" src={img9} />
                            <h4> <a className='navbar-brand text-dark fs-4' href="/reseacrhtopic"> View Approved Research Topic </a></h4>
                        </center>
                    </div>

                    <div class="col-md-4">
                        <center>
                            <img width="300px" src={img4} />
                            <Link className='navbar-brand fs-4 text-dark' to={`/markingSchemas`}><h4>Evaluate Marks</h4></Link>
                        </center>
                    </div>

                    <div class="col-md-4">
                        <center>
                            <img width="300px" src={img4} />
                            <h4> <a className='navbar-brand text-dark fs-4' href="#">  Download Marking Scheme </a> </h4>
                        </center>
                    </div>
                </div>
        </div>
        </div>
        </div>

    )
}

export default panelHome;