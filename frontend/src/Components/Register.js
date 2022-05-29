import React, { useState, useRef, useEffect } from 'react';
import AuthService from '../Services/AuthServices';
import Message from '../Components/Message';

const Register = props => {

    const [user, setUser] = useState({ username: "", password: "", email: "", role: "user", name: "", contact: "", type: "", interest:""  });
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
        setUser({ username: "", password: "", email: "", role: "", name: "", contact: "", type: "", interest:"" });
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
        <div class="container shadow my-5 col-md-9 p-6 align-items-center">
            <div className=" d-flex flex-column align-items-center text-dark justify-content-center form">
                <h1 className="display-4 fw-bolder"> User Registration</h1>
                <p className="lead text-center">Enter Your Credentials to Register</p>   
            </div>
            <form onSubmit={onSubmit}>
                <h3>Please Register</h3>

                <div className="form-check">
                    
                    <label for="name">Name :</label>
                    <input type="name"
                        name="name"
                        value={user.name}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Enter name" />
                </div>
                <div className="form-check">
                    <label for="name">Username :</label>
                    <input type="text"
                        name="username"
                        value={user.username}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Enter Username" />
                </div>
                <div className="form-check">
                    <label for="name">Password :</label>
                    <input type="password"
                        name="password"
                        value={user.password}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Enter Password" />
                </div>
                <div className="form-check">
                    <label for="name">Email :</label>
                    <input type="email"
                        name="email"
                        value={user.email}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Enter email" />
                </div>
                <div className="form-check">
                    <label for="name">Contact Number :</label>
                    <input type="contact"
                        name="contact"
                        value={user.contact}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Enter contact" />
                </div>
                <br></br>
                <div className="form-check">
                    <div class="row">
                        <div class="col-sm">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">User Type</label>
                                </div>
                                <select class="custom-select" id="type"  type="type"
                                    name="type"
                                    value={user.type}
                                    onChange={onChange}>
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
                                <select class="custom-select" id="role" type="text"
                                    name="role"
                                    value={user.role}
                                    onChange={onChange}>
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
                                <select class="custom-select" id="interest"type="interest"
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
                </div>
                <br></br>


                <button className="btn btn-lg btn-primary btn-block"
                    type="submit">Register</button>
                <br></br>
            </form>
            {message ? <Message message={message} /> : null}
            <br></br>
        </div>
    )
}


export default Register;