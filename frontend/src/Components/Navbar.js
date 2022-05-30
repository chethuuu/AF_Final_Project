import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../Services/AuthServices';
import { AuthContext } from '../Context/AuthContext';



const Navbar = props => {

    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

    const uname = user.username;

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
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link>
                <Link to="/login">
                    <li className="nav-item nav-link">
                        Login
                    </li>
                </Link>
                <Link to="/register">
                    <li className="nav-item nav-link">
                        Register
                    </li>
                </Link>
                
            </>

        )
    }



    const authenticatedNavBar = () => {

        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link>

                <Link to="/todos">
                    <li className="nav-item nav-link">
                        Todos
                    </li>
                </Link>
                {
                    user.role === "admin" ?
                        <Link to="/admin">
                            <li className="nav-item nav-link">
                                Admin
                            </li>
                        </Link> : null

                }

{
                    user.role === "user" ?
                        <Link to={`/user/${uname}`}>
                            <li className="nav-item nav-link">
                                Student
                            </li>
                        </Link> : null
                        
                }

                {
                    user.role === "Supervisor" ?
                        <Link to="/Supervisor">
                            <li className="nav-item nav-link">
                                Supervisor
                            </li>
                        </Link> : null

                }

                {
                    user.role === "CoSupervisor" ?
                        <Link to="/CoSupervisor">
                            <li className="nav-item nav-link">
                                CoSupervisor
                            </li>
                        </Link> : null

                }


                {
                    user.role === "PanelMember" ?
                        <Link to="/PanelMember">
                            <li className="nav-item nav-link">
                                PanelMember
                            </li>
                        </Link> : null

                }

                <button type="button"
                    className="btn btn-link nav-item nav-link"
                    onClick={onClickLogoutHandler}>Logout</button>


            </>
        )
    }




    return (


        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <Link class="navbar-brand" href="#">Project Management Tool </Link>

                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}

                    </ul>

                </div>
            </nav>

        </div>
    )


}

export default Navbar;