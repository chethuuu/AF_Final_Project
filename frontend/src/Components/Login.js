import React, { useState, useContext } from 'react';
import AuthService from '../Services/AuthServices';
import Message from '../Components/Message';
import { AuthContext } from '../Context/AuthContext';
import { NavLink } from 'react-router-dom'


const Login = props => {

    const [user, setUser] = useState({ username: "", password: "" });
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);


    const onChange = e => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const onSubmit = e => {
        e.preventDefault();

        AuthService.login(user).then(data => {
            console.log(data);

            const { isAuthenticated, user, message } = data;

            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push(`/to/${user.username}`);
            }

            else

                setMessage(message);
        });
    }






    return (


        <div>

            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-dark justify-content-center form">
                        <h1 className="display-4 fw-bolder"> Welcome Back</h1>
                        <p className="lead text-center">Enter Your Credentials to Login</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="" className="btn btn-outline-light rounded-pill pb-2 w-50">Request to Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
                        <form onSubmit={onSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Username</label>
                                <input name="username" onChange={onChange} type="text" class="form-control"  required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input name="password" onChange={onChange} autoComplete="on" type="password" class="form-control"  required />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 rounded-pill">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            {message ? <Message message={message} /> : null}


        </div>
    )

}



export default Login;