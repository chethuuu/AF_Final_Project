import React, { useEffect, useState } from 'react';
import img1 from '../../img/img1.png'
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import img2 from '../../img/img2.png'
import img3 from '../../img/img3.png'
import img4 from '../../img/img4.png'
import img5 from '../../img/img5.png'
import img6 from '../../img/group.png'


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
                        {/* <h3 className='fs-5 text-center mb-0'>Student DashBoard</h3> */}
                        <h1 className='display-6 text-center mb-4'> <b> Student DashBoard </b></h1>
                        <hr className='w-25 mx-auto' />
                    </div>

                    <div className="d-flex flex-row-reverse">
                        <div className="p-2 dashboard-u">{userDetails.username}</div>
                        <div className="p-2 dashboard-n">{userDetails.name}</div>
                    </div>

                </div>
            </div>

            <div className="row py-3">
                <div className="col-md-4">
                    <center>
                        <img width="300px" src={img6} />
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
                        <img width="150px" src={img5} />
                        <h4> <a className='navbar-brand fs-4 text-dark' href="/viewreg"> Request Supervisor </a> </h4>
                    </center>
                </div>
            </div>

            <br /> <br />
            <div className="row">
                <div className="col-md-4">
                    <center>
                        <img width="300px" src={img1} />
                        <h4> <a className='navbar-brand fs-4 text-dark' href="/viewcostu"> Request Co-Supervisor  </a> </h4>
                    </center>
                </div>
                <div className="col-md-4">
                    <center>

                        <img width="300px" src={img1} />
                        <h4> <a className='navbar-brand fs-4 text-dark' href="/uploadFiles"> Sumbit Documents </a> </h4>
                    </center>
                </div>
                <div className="col-md-4">
                    <center>
                        <img width="250px" src={img4} />
                        <h4> <a className='navbar-brand fs-4 text-dark' href="#"> Download Templates </a> </h4>
                    </center>
                </div>
                <br /> <br />
            </div>
        </div>
    );

}

export default studentHome;