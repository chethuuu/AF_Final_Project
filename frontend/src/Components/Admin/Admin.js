import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Admin = () => (

    <div className="container">
        <br></br><br></br>
        <h1> Mooda Admin  </h1>
        <Link to="/data">
            <li className="nav-item nav-link">
                View All Users
            </li>
        </Link>

        <a class="nav-link text-dark" href="/mcounterclass">Marking</a>


    </div>
)

export default Admin;
