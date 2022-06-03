import React, { useState, useRef, useEffect } from 'react';
import AuthService from '../Services/AuthServices';
import Message from '../Components/Message';
import { NavLink } from 'react-router-dom';

const Register = props => {

    const [user, setUser] = useState({ username: "", password: "", email: "", role: "user", name: "", contact: "", type: "", interest: "" });
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    const resetForm = () => {
        setUser({ username: "", password: "", email: "", role: "", name: "", contact: "", type: "", interest: "" });
    }


    const onSubmit = e => {
        e.preventDefault();
        AuthService.register(user).then(data => {
            const { message } = data;
            setMessage(message);
            resetForm();
            if (!message.msgError) {
                timerID = setTimeout(() => {
                    props.history.push('/login');
                }, 2000)
            }
        });
    }




    return (
        <div>
            <div className="container shadow my-4">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder text-center"> Welcome </h1>
                        <p className="lead text-center"> Enter Your Details to Request </p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
                    </div>
                    <div className="col-md-7 p-5">
                        <h1 className="display-6 fw-bolder mb-2">REGISTER</h1>
                        <form onSubmit={onSubmit}>

                            <div className='row py-3'>
                                <div class="col-md-6">
                                    <label for="name">Name :</label>
                                    <input type="name"
                                        name="name"
                                        value={user.name}
                                        onChange={onChange}
                                        className="form-control"
                                        placeholder="Enter name" />
                                </div>

                                <div class="col-md-6">
                                    <label for="name">Username :</label>
                                    <input type="text"
                                        name="username"
                                        value={user.username}
                                        onChange={onChange}
                                        className="form-control"
                                        placeholder="Enter Username" />
                                </div>

                            </div>

                            <div className='row py-3'>
                                <div class="col-md-6">
                                    <label for="name">Password :</label>
                                    <input type="password"
                                        name="password"
                                        value={user.password}
                                        onChange={onChange}
                                        className="form-control"
                                        placeholder="Enter Password" />
                                </div>


                                <div class="col-md-6">
                                    <label for="name">Email :</label>
                                    <input type="email"
                                        name="email"
                                        value={user.email}
                                        onChange={onChange}
                                        className="form-control"
                                        placeholder="Enter email" />
                                </div>
                            </div>

                            <div className='row py-3'>
                                <div class="col-md-12">
                                    <label for="name">Contact Number :</label>
                                    <input type="contact"
                                        name="contact"
                                        value={user.contact}
                                        onChange={onChange}
                                        className="form-control"
                                        placeholder="Enter contact" />
                                </div>
                            </div>

                            
                            <div className='row py-3'>
                                <div class="col-md-4">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">User Type</label>
                                        <select class="custom-select" id="type" type="type"
                                            name="type"
                                            value={user.type}
                                            onChange={onChange}>
                                            <option selected>Choose...</option>
                                            <option value="Staff">Staff</option>
                                            <option value="Student">Student</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='col-md-4'>
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="role">Role</label>
                                        <select class="custom-select" id="role" type="text"
                                            name="role"
                                            value={user.role}
                                            onChange={onChange}>
                                            <option selected>Choose...</option>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                            <option value="Supervisor">Supervisor</option>
                                            <option value="CoSupervisor">CoSupervisor</option>
                                            <option value="PanalMember">PanalMember</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="interest">Interest</label>
                                        <select class="custom-select" id="interest" type="interest"
                                            name="interest"
                                            value={user.interest}
                                            onChange={onChange}>
                                            <option selected>Choose...</option>
                                            <option value="Software Engineer">Software Engineer</option>
                                            <option value="Information Technology">Information Technology</option>
                                            <option value="Cyber Security">Cyber Security</option>
                                            <option value="Computer Networking">Computer Networking</option>
                                            <option value="None">None</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-4 rounded-pill">Request to Register</button>

                        </form>
                    </div>
                </div >
            </div >
            {message ? <Message message={message} /> : null}
            <br></br>
        </div >
    )
}


export default Register;