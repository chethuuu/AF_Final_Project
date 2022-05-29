import React from 'react';
import img1 from '../../img/img1.png'
import img2 from '../../img/group.png'
import {useParams} from 'react-router-dom';

const studentHome = () => {

    const {userName} = useParams("");

    useEffect(() => {
       
		const getdata = async() =>{
			try {
				const res = await axios.get(`http://localhost:3500/itemadd/getItem/${userName}`)
				setListItems(res.data);
				console.log('render');
			} catch(err) {
				console.log(err);
			}
		}
		getdata()
	 },[]);




    return(
        <div class="container">
        <div class="row">
            <div class="col-12">
                <center>
                    <h1>Dashboard</h1>
                    <br /> <br />
                    <h5>{userName}</h5>
                </center>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <center>
                    <img width="300px" src={img2}  />
                    <h4> <a href="/createGrp"> Create Student Groups </a></h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="/viewtopic"> Register for Research Topic </a> </h4>
                </center>
            </div>

            <div class="col-md-4">
                <center>
                    <img width="300px" src={img1} />
                    <h4> <a href="/viewtopic"> Request Co-Supervisor </a> </h4>
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
                    <img width="300px" src={img1} />
                    <h4> <a href="#"> Download Templates </a> </h4>
                </center>
            </div>

            <br /> <br />




        </div>
    </div>
    );

    }

export default studentHome;
