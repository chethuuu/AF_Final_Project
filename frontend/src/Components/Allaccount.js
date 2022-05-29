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

  const deleteUser = async(id) => {

    try {

      const res = await axios.delete(`http://localhost:5000/user/delete/${id}`)

      const newListItems = userRouter.filter(topic => topic._id !==  id);

      setUserRouter(newListItems);



    } catch(err) {

      console.log(err);

    }

}

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
            <th Scope="col"> Name </th>
            <th Scope="col"> User name </th>
            <th Scope="col"> Email Address </th>
            <th Scope="col"> Contact Number </th>
            <th Scope="col"> Type </th>
            <th Scope="col"> Role  </th>
            <th Scope="col"> Interest </th>

            <div className="col-lg-9 mt-2 mb-2">


            </div>

          </tr>
        </thead>

        <tbody>

          {userRouter.map((admin, index) => (

            <tr key={index}>
              <th scope="row">{index + 1}</th>

              <td>{admin.name}</td>
              <td>{admin.username}</td>
              <td>{admin.email}</td>
              <td>{admin.contact}</td>
              <td>{admin.type}</td>
              <td>{admin.role}</td>
              <td>{admin.interest}</td>
              <td><button type="button" class="btn btn-primary">Update</button></td>
              <td><button onClick={()=>deleteUser(admin._id)} type="button" class="btn btn-danger">Delete</button></td>
              






            </tr>

          ))}






        </tbody>


      </table>


    </div>
  );

};

export default Allaccount;
