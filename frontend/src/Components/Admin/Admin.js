import React from 'react'

import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img4 from '../../img/img4.png'
import img11 from '../../img/img11.png'
import img12 from '../../img/img12.png'
import img13 from '../../img/img13.png'
import img14 from '../../img/img14.png'

const Admin = () => (

    <div className="container my-0 py-3">
        <div className="row">
            <div className="col-12">
                <div className='col-12'>
                    <h1 className='display-6 text-center mb-4'> <b> Admin DashBoard </b></h1>
                    <hr className='w-25 mx-auto' />
                </div>
            </div>
        </div> <br/>

        <div class="row">

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img11} />
                    <h4> <a className='navbar-brand fs-4 text-dark' href="/data">  View All Users </a></h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="240px" src={img12} />
                    <h4> <a className='navbar-brand fs-4 text-dark' href="/mcounterclass"> Create Marking Schema </a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="250px" src={img13} />
                    <h4> <a className='navbar-brand fs-4 text-dark' href="/allmarking"> All Marking Schemes </a> </h4>
                </center>
            </div>

        </div>

        <br /> 

        <div class="row">
            <div class="col-md-4">
                <center>
                    <img width="300px" src={img2} />
                    <h4> <a className='navbar-brand fs-4 text-dark' href="/templates"> Upload Templates</a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img4} />
                    <h4> <a className='navbar-brand fs-4 text-dark' href="/seeDocs"> Submit Documents </a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
<<<<<<< HEAD
                    <img width="300px" src={img14} />
                    <h4> <a className='navbar-brand fs-4 text-dark' href="/grpDisplay"> Allocate Panel Members </a> </h4>
=======
                    <img width="300px" src={img1} />
                    <h4> <a href="/grpNotAssignDisplay"> Allocate Panel Members </a> </h4>
>>>>>>> 1b6ee28106b998e4a2ebc4d5f629a48a7c906d98
                </center>
            </div>
        </div>
    </div>


)

export default Admin;
