import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";

import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img4 from '../../img/img4.png'
import img5 from '../../img/img5.png'
import img6 from '../../img/img6.png'
import img7 from '../../img/img7.png'
import img8 from '../../img/img8.png'


const studentHome = () => {

    const [userDetails, setUserDetails] = useState({
        name: "",
        username: "",
    });

    const { username } = useParams("");

    useEffect(() => {

        const getdata = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/user/getUsername/${username}`)
                setUserDetails(res.data);
                console.log('render');
            } catch (err) {
                console.log(err);
            }
        }
        getdata()
    }, []);


    return (
        <div className="container my-0 py-3">
            <div className="row">
                <div className="col-12">
                    <div className='col-12'>
                        <h1 className='display-6 text-center mb-4'> <b> Student DashBoard </b></h1>
                        <hr className='w-25 mx-auto' />
                    </div>

                    <div className="d-flex flex-row-reverse">
                        <div className="p-0 mr-6"><button className='btn btn-danger'>{userDetails.username}</button></div>
                        <div className="p-0 mr-2"><button className='btn btn-warning'>{userDetails.name}</button></div>
                    </div>

                </div>
            </div>

            <div className="row py-3">
                <div className="col-md-4">
                    <center>
                        <img width="300px" src={img8} />
                        <Link className='navbar-brand fs-4 text-dark' to={`/createGrp/${username}`}><h4>Create Student Groups</h4></Link>
                    </center>
                </div>

                <div className="col-md-4">
                    <center>
                        <img width="310px" src={img1} />
                        <h4> <a className='navbar-brand fs-4 text-dark' href="/viewtopic"> Register for Research Topic </a> </h4>
                    </center>
                </div>

                <div className="col-md-4">
                    <center>
                        <img width="300px" src={img6} />
                        <h4> <a className='navbar-brand fs-4 text-dark' href="/viewreg"> Request Supervisor </a> </h4>
                    </center>
                </div>
            </div>

            <br /> 
            <div className="row">
                <div className="col-md-4">
                    <center>
                        <img width="260px" src={img7} />
                        <h4> <a className='navbar-brand fs-4 text-dark' href="/viewcostu"> Request Co-Supervisor  </a> </h4>
                    </center>
                </div>
                <div className="col-md-4">
                    <center>

                        <img width="280px" src={img2} />
                        <h4> <a className='navbar-brand fs-4 text-dark' href="/uploadFiles"> Submit Documents </a> </h4>
                    </center>
                </div>
                <div className="col-md-4">
                    <center>
                        <img width="280px" src={img4} />
                        <h4> <a className='navbar-brand fs-4 text-dark' href="#"> Download Templates </a> </h4>
                    </center>
                </div>
                <br /> <br />
            </div>
        </div>
    );

}

export default studentHome;