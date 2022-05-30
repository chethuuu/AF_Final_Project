import React, { useEffect, useState} from 'react';
import img1 from '../../img/img1.png'
import {useParams, Link} from 'react-router-dom';
import axios from "axios";
import img2 from '../../img/img2.png'
import img3 from '../../img/img3.png'
import img4 from '../../img/img4.png'
import img5 from '../../img/img5.png'
import img6 from '../../img/group.png'

import {useParams} from 'react-router-dom';


const studentHome = () => {
    
    const [userDetails, setUserDetails] = useState({
        name:"",
        username:"",
    });

    const {username} = useParams("");

    /*useEffect(() => {
       
		const getdata = async() =>{
			try {
				const res = await axios.get(`http://localhost:5000/user/getUsername/${username}`)
				setUserDetails(res.data);
				console.log('render');
			} catch(err) {
				console.log(err);
			}
		}
		getdata()
	 },[]);*/


    return(
        <div class="container">
        <div class="row">
            <div class="col-12">
                <center>
                    <h1>Dashboard</h1>
                    <br /> <br />
                </center>

                <div>
                    <h6>{userDetails.username}</h6>
                    <h6>{userDetails.name}</h6>
                </div>
                
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <center>
                    <img width="300px" src={img6}  />
                    <Link to={`/createGrp/${username}`}><h4>Create Student Groups</h4></Link> 
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

                    <img width="300px" src={img1}  />
                    <h4> <a href="/uploadFiles"> Sumbit Documents </a> </h4>
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
    );

    }

export default studentHome;
