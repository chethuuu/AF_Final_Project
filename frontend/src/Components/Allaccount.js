import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

const Allaccount = () => {

  const [userRouter, setUserRouter] = useState([]);
  const [selects, setSelects] = useState();

  useEffect(() => {
    axios
      .get("user/alldata")
      .then(res => setUserRouter(res.data))
      .catch(error => console.log(error));
  });

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/user/delete/${id}`)
      const newListItems = userRouter.filter(topic => topic._id !== id);
      setUserRouter(newListItems);
    } catch (err) {
      console.log(err);
    }
  }

  function SearchItem() {
    console.log(role)
    axios.get(`http://localhost:5000/user/filter/${selects}`)
      .then(res => {
        console.log(res.data)
        setUserRouter(res.data)
      }).catch(err => console.error(err))
  }

  return (
    <div className="container shadow my-5">
      <div class="input-group">
        <div class="form-inline my-2 my-lg-0">
          <h5 className='search-topic'>Select by User Role  </h5>
          <Button className='btn btn-primary search-btn' onClick={() => { SearchItem({ selects }) }}>Search</Button>
          <select className='form-control select-btn w-50' name="role" id="role" value={selects} onChange={e => setSelects(e.target.value)}>
            <option>None</option>
            <option>user</option>
            <option>admin</option>
            <option>Supervisor</option>
            <option>CoSupervisor</option>
            <option>PanelMember</option>
          </select>
        </div> <br />
      </div>

      <table className="table">
        <thead className='table-dark'>
          <tr>
            <th Scope="col"> No </th>
            <th Scope="col"> Name </th>
            <th Scope="col"> Username </th>
            <th Scope="col"> Email Address </th>
            <th Scope="col"> Contact Number </th>
            <th Scope="col"> Type </th>
            <th Scope="col"> Role  </th>
            <th Scope="col"> Topic Category </th>
            <th scope='col'> Update </th>
            <th scope='col'> Delete </th>
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
              <td><Link to={`UpdateUser/${admin._id}`}><button type="button" class="btn btn-warning">Update</button></Link></td>
              <td><button onClick={() => deleteUser(admin._id)} type="button" class="btn btn-danger">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allaccount;
