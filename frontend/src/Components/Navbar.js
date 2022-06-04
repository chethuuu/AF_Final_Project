import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthService from '../Services/AuthServices';
import { AuthContext } from '../Context/AuthContext';
import logo from '../img/Logo.png'


const Navbar = props => {

    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

    const uname = user.username;

    const uID = "6290e4b513f776c1fff527d9";
    const aID = "6290b1ecd53a856b1051ccd0";
    const sID = "62923d33303e8934e81f2440";
    const cID = "629518c75af9f0bde1464fdc";

    //logout button create 
    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {

            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    const unauthenticatedNavBar = () => {

        return (
            <>
                <Link to="/home">
                    <li className="navbar-brand header">
                        Home
                    </li>
                </Link>
                <Link to="/about">
                    <li className="navbar-brand header">
                        About
                    </li>
                </Link>
                <Link to="/contact">
                    <li className="navbar-brand header">
                        Contact Us
                    </li>
                </Link>
                <a class="navbar-brand topic-un" href="#">Research Project Management Tool</a>
                <Link to="/login">
                    <button className="btn btn-outline-primary ms-9 px-4 rounded-pill btn_log">
                        Login <i className="fa fa-sign-in me-2" />
                    </button>
                </Link> &nbsp;
                <Link to="/">
                    <button className="btn btn-outline-primary ms-9 px-4 rounded-pill btn_reg">
                        Register <i className="fa fa-user-plus me-2" />
                    </button>
                </Link>

            </>

        )
    }



    const authenticatedNavBar = () => {

        return (
            <>
                <Link to="/userhome">
                    <li className="navbar-brand header">
                        Home
                    </li>
                </Link>
                {
                    user.role === "admin" ?
                        <Link to="/admin">
                            <li className="navbar-brand header">
                                Admin
                            </li>
                        </Link> : null

                }

                {
                    user.role === "user" ?
                        <Link to={`/user/${uname}`}>
                            <li className="navbar-brand header">
                                Student
                            </li>
                        </Link> : null

                }

                {
                    user.role === "Supervisor" ?
                        <Link to="/Supervisor">
                            <li className="navbar-brand header">
                                Supervisor
                            </li>
                        </Link> : null

                }

                {
                    user.role === "CoSupervisor" ?
                        <Link to="/CoSupervisor">
                            <li className="navbar-brand header">
                                CoSupervisor
                            </li>
                        </Link> : null

                }


                {
                    user.role === "PanelMember" ?
                        <Link to="/PanelMember">
                            <li className="navbar-brand header">
                                PanelMember
                            </li>
                        </Link> : null

                }

                {
                    // (user.role === "Supervisor" || user.role === "CoSupervisor" ||  user.role === "user" || user.role === "admin") ? <Link to='/messengerU/:id'><li className="navbar-brand header">Messenger</li></Link> : null
                    (user.role === "user") ? <Link to={`/messengerU/${uID}`} ><li className="navbar-brand header">Messenger</li></Link> 
                    : (user.role === "Supervisor") ? <Link to={`/messengerS/${sID}`}><li className="navbar-brand header">Messenger</li></Link> 
                    : (user.role === "CoSupervisor") ? <Link to={`/messengerC/${cID}`}><li className="navbar-brand header">Messenger</li></Link>
                    :  (user.role === "admin") ? <Link to={`/messengerA/${aID}`}><li className="navbar-brand header">Messenger</li></Link>
                    : null
                }

                <a class="navbar-brand topic-a" href="#">Research Project Management Tool</a>

                <Link to="/">
                    <button className="btn btn-outline-primary ms-9 px-4 rounded-pill btn_logout" onClick={onClickLogoutHandler}>
                        Logout <i className="fa fa-sign-out me-2" />
                    </button>
                </Link>


            </>
        )
    }




    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <a class="navbar-brand" href="#">
                            <img className='logo' src={logo} width="30" height="30" alt="" />
                        </a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )


}

export default Navbar;