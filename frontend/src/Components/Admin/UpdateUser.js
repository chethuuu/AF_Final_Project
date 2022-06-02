import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';


export default function UpdateUser(props) {

    const [user, setListItems] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        contact: "",
        type: "",
        role: "",
        interest: ""

    });
    const { id } = useParams("");

    function sendUpadateUser(e) {
        e.preventDefault();

        axios.put(`http://localhost:5000/user/update/${id}`, user)
            .then(res => {
                console.log(res.data)
                alert("Item Updated")

            }).catch((err) => {
                alert(err)
                console.error(err)

            })
    }


    useEffect(() => {

        const getdata = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/user/user/${id}`)
                setListItems(res.data);
                console.log('render');
            } catch (err) {
                console.log(err);
            }
        }
        getdata()
    }, []);



    return (


        <div>
            <h1>   {id}

            </h1>
            <h1> {user.email}</h1>

            <div>
                <div class="container shadow my-5 col-md-9 p-6 align-items-center">
                    <div className=" d-flex flex-column align-items-center text-dark justify-content-center form">
                        <h1 className="display-4 fw-bolder"> User Registration</h1>
                        <p className="lead text-center">Enter Your Credentials to Register</p>


                    </div>

                    <form onSubmit={sendUpadateUser}>

                        <div className="form-check">
                            <label for="name">Enter Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Name"
                                value={user.name}
                                onChange={(e) => { setListItems({ name: e.target.value }) }}></input>
                        </div>
                        <div className="form-check">
                            <label for="id">Student ID</label>
                            <input type="text" className="form-control" id="id" placeholder="Student Id"
                                value={user.username}
                                onChange={(e) => { setListItems({ username: e.target.value }) }}></input>
                        </div>
                        <div className="form-check">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email "
                                value={user.email}
                                onChange={(e) => { setListItems({ email: e.target.value }) }}></input>
                        </div>
                        <div className="form-check">
                            <label for="contact">Phone Number</label>
                            <input type="text" className="form-control" id="contact" placeholder="Enter phone number "
                                value={user.contact}
                                onChange={(e) => { setListItems({ contact: e.target.value }) }}></input>
                        </div>
                        <div className="form-check">
                            <label for="password">Enter password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password "
                                value={user.password}
                                onChange={(e) => { setListItems({ password: e.target.value }) }}></input>
                        </div><br></br>

                        <div className="form-check">
                            <div class="row">
                                <div class="col-sm">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">User Type</label>
                                        </div>
                                        <select class="custom-select" id="type"
                                            value={user.type}
                                            onChange={(e) => { setListItems({ type: e.target.value }) }}>
                                            <option selected>Choose...</option>
                                            <option value="Staff">Staff</option>
                                            <option value="Student">Student</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="role">Role</label>
                                        </div>
                                        <select class="custom-select" id="role"
                                            value={user.role}
                                            onChange={(e) => { setListItems({ role: e.target.value }) }}>
                                            <option selected>Choose...</option>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                            <option value="Supervisor">Supervisor</option>
                                            <option value="Co-Supervisor">Co-Supervisor</option>
                                            <option value="Panal Member">Panal Member</option>


                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="interest">Interest</label>
                                        </div>
                                        <select class="custom-select" id="interest"
                                            value={user.interest}
                                            onChange={(e) => { setListItems({ interest: e.target.value }) }}>
                                            <option value="Software Engineer">Software Engineer</option>
                                            <option value="Information Technology">Information Technology</option>
                                            <option value="Cyber Security">Cyber Security</option>
                                            <option value="Computer Networking">Computer Networking</option>
                                            <option value="None">None</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br></br><br></br><br></br><br></br>

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>

                </div>
            </div>

        </div>
    )
};