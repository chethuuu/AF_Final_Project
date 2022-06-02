import React from 'react';

import img1 from '../../img/img1.png'
import img9 from '../../img/img9.png'


const cosupHome = () => {
    return (
        <div class="container my-0 py-3">
            <div className="row">
                <div className="col-12">
                    <div className='col-12'>
                        <h1 className='display-6 text-center mb-4'> <b> Co-Supervisor DashBoard </b></h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                </div>
            </div>

        	<br/><br/>
            <div class="row">
                <div class="col-md-4">
                    <center>
                        <img width="250px" src={img9} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="/viewco"> View Requests </a></h4>
                    </center>
                </div>

                <div class="col-md-4">
                    <center>
                        <img width="330px" src={img1} />
                        <h4> <a className='navbar-brand text-dark fs-4' href="#"> View Research Document </a> </h4>
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

export default cosupHome;
