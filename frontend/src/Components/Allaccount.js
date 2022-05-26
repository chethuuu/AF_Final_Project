import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';

const Allaccount = () => {

  const [userRouter, setUserRouter] = useState([]);

  useEffect(() => {

    axios
      .get("/user/alldata")
      .then(res => setUserRouter(res.data))
      .catch(error => console.log(error));


  });

  return (

    <div className="container">
      <Link to="/admin">
        <li className="nav-item nav-link">
          Home
        </li>
      </Link>

      <table className="table">
        <thead>
          <tr>
            <th Scope="col"> #</th>
            <th Scope="col"> user name </th>
            <th Scope="col">email </th>
            <th Scope="col"> role  </th>

            <div className="col-lg-9 mt-2 mb-2">


            </div>

          </tr>
        </thead>

        <tbody>

          {userRouter.map((admin, index) => (

            <tr key={index}>
              <th scope="row">{index + 1}</th>


              <td>
                {admin.username}

              </td>
              <td>{admin.email}</td>
              <td>{admin.role}</td>






            </tr>

          ))}






        </tbody>


      </table>


    </div>
  );

};

export default Allaccount;
