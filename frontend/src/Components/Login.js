import React, { useState, useContext } from 'react';
import AuthService from '../Services/AuthServices';
import Message from '../Components/Message';
import { AuthContext } from '../Context/AuthContext';


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


        <div className="container">
            <form onSubmit={onSubmit}>
                <br></br>
                <h2>Please sign in</h2>
                <br></br><br></br>
                <label htmlFor="username" className="sr-only">Username: </label>
                <input type="text"
                    name="username"
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Username" />
                <br></br>
                <label htmlFor="password" className="sr-only">Password: </label>
                <input type="password"
                    name="password"
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Password" />
                <br></br><br></br>
                <button className="btn btn-lg btn-primary btn-block"
                    type="submit">Log in </button>       


            </form>
            {message ? <Message message={message} /> : null}


        </div>
    )

}



export default Login;