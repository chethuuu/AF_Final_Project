import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";

function StudentProfile() {
    const { username } = useParams("");

    const [listTopic, setListTopics] = useState([]);
    const [userDetails, setUserDetails] = useState([]);
    const [status, setStatus] = useState([]);

    useEffect(() => {
        const getListTopics = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/user/getUsername/${username}`)
                setUserDetails(res.data);
                const rest = await axios.get(`http://localhost:5000/group/getgrp/filter/${username}`)
                setListTopics(rest.data);
                const resttt = await axios.get(`http://localhost:5000/api/leader/check/${username}`)
                setStatus(resttt.data);
            } catch (err) {
                console.log(err);
            }
        }
        getListTopics()
    }, []);


    return (
        <div> <br />
            <h2>Hello {userDetails.username} ! &nbsp;{userDetails.name}</h2>

            <div className='container shadow my-5'>
                <br />
                <h1 className='display-6 text-center mb-4'> <b> Student Summary </b></h1>
                <hr className='w-25 mx-auto' />

                <div class="col-md-12 bg-light text-right">
                    <Link to='#'>
                        <button className='btn btn-success'>View Marks</button>
                    </Link>
                </div>
                
                <b>Group Details</b>
                <table class="table">
                    <thead className='table-active'>
                        <tr>
                            <th>Leader's IT Number</th>
                            <th>Group ID</th>
                            <th>Pannel Status</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            listTopic.map((profile) => (
                                <tr>
                                    <td>{profile.user_id}</td>
                                    <td>{profile.group_id}</td>
                                    <td>{profile.pannel_status}</td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>


                {/* Research Topic Status Data Display */}
                <b>Research Topic Status</b>
                <table class="table">
                    <thead className='table-danger'>
                        <tr>
                            <th scope='col'>Topic Category</th>
                            <th scope="col">Research Topic</th>
                            <th scope="col">Supervisor Status</th>
                            <th scope="col">Co-Supervisor Status</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            status.map((status) => (
                                <tr>
                                    <td>{status.interest}</td>
                                    <td>{status.name}</td>
                                    <td><button className='btn btn-outline-danger'>{status.status_sup}</button></td>
                                    <td><button className='btn btn-outline-danger'>{status.status_co}</button></td>

                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>



                <div className='row py-3'>
                    <div className='col-md-6'> <b>Leader</b>
                        {/* Leader's Details Display */}
                        <table class="table">
                            <thead className='table-primary'>
                                <tr>
                                    <th scope='col'>Leader Name</th>
                                    <th scope="col">IT Number</th>
                                    <th scope="col">Contact Number</th>
                                    <th scope="col">E-mail</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                {
                                    listTopic.map((profile,) => (
                                        <tr>
                                            <td>{profile.leader.name}</td>
                                            <td>{profile.leader.ID}</td>
                                            <td>{profile.leader.contact}</td>
                                            <td>{profile.leader.email}</td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    {/* Group Member 02 Details Display */}
                    <div className='col-md-6'> <b>Group Member 02 </b>
                        <table class="table">
                            <thead className='table-primary'>
                                <tr>
                                    <th scope='col'>Member Name</th>
                                    <th scope="col">IT Number</th>
                                    <th scope="col">Contact Number</th>
                                    <th scope="col">E-mail</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                {
                                    listTopic.map((profile,) => (
                                        <tr>
                                            <td>{profile.member1.name}</td>
                                            <td>{profile.member1.ID}</td>
                                            <td>{profile.member1.contact}</td>
                                            <td>{profile.member1.email}</td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='row py-3'>

                        {/* Group Member 03 Details Display */}
                        <div className='col md-6'><b>Group Member 03 </b>
                            <table class="table">
                                <thead className='table-primary'>
                                    <tr>
                                        <th scope='col'>Member Name</th>
                                        <th scope="col">IT Number</th>
                                        <th scope="col">Contact Number</th>
                                        <th scope="col">E-mail</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    {
                                        listTopic.map((profile,) => (
                                            <tr>
                                                <td>{profile.member2.name}</td>
                                                <td>{profile.member2.ID}</td>
                                                <td>{profile.member2.contact}</td>
                                                <td>{profile.member2.email}</td>
                                            </tr>
                                        )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        {/* Group Member 02 Details Display */}
                        <div className='col md-6'><b>Group Member 04 </b>
                            <table class="table">
                                <thead className='table-primary'>
                                    <tr>
                                        <th scope='col'>Member Name</th>
                                        <th scope="col">IT Number</th>
                                        <th scope="col">Contact Number</th>
                                        <th scope="col">E-mail</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    {
                                        listTopic.map((profile,) => (
                                            <tr>
                                                <td>{profile.member3.name}</td>
                                                <td>{profile.member3.ID}</td>
                                                <td>{profile.member3.contact}</td>
                                                <td>{profile.member3.email}</td>
                                            </tr>
                                        )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='row py-3'>

                        {/* Panel 01 data display */}
                        <div className='col md-6'><b>Panel 01</b>
                            <table class="table">
                                <thead className='table-secondary'>
                                    <tr>
                                        <th scope='col'>Member ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">E-mail</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    {
                                        listTopic.map((profile,) => (
                                            <tr>
                                                <td>{profile.pannel.panel1.ID}</td>
                                                <td>{profile.pannel.panel1.name}</td>
                                                <td>{profile.pannel.panel1.email}</td>
                                            </tr>
                                        )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        {/* Panel 02 Data Display */}
                        <div className='col md-6'><b>Panel 02</b>
                            <table class="table">
                                <thead className='table-secondary'>
                                    <tr>
                                        <th scope='col'>Member ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">E-mail</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    {
                                        listTopic.map((profile,) => (
                                            <tr>
                                                <td>{profile.pannel.panel2.ID}</td>
                                                <td>{profile.pannel.panel2.name}</td>
                                                <td>{profile.pannel.panel2.email}</td>
                                            </tr>
                                        )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div >
        </div >
    )
}


export default StudentProfile 