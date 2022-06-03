import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function StudentProfile() {

    const { username } = useParams("");

    const [userDetails, setUserDetails] = useState({
        gid: "",
    });

    const [grpDetails, setGrpDetails] = useState({
        user_id: "", //IT Number
        group_id: "",
    });   
    
    const [grp, setGrp] = useState({
        group_id: "",
    });

    useEffect(() => {
        const getdata = async () => {
            try {
                const rest = await axios.get(`http://localhost:5000/api/leader/check/${username}`)
                setUserDetails(rest.data);
        
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
                        <h1 className='display-6 text-center mb-4'> <b> User Profile </b></h1>
                        <hr className='w-25 mx-auto' />
                    </div>
                </div> <br /><br />

                <h1>hi{userDetails.gid}</h1>
                <h1>{username}</h1>

                <table class="table">
                    <thead className='table-dark'>
                        <tr>
                            <th scope='col'>Username</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">E-mail Address</th>
                            <th scope="col">Group ID</th>
                            <th scope="col">Group ID</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <td>{userDetails.gid}</td>
                            <td>{userDetails.name}</td>
                            <td>{userDetails.email}</td>
                            <td>{grpDetails.user_id}</td>
                            <td>{grpDetails.group_id}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

    )
}

export default StudentProfile