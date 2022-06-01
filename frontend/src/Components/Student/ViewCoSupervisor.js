import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function ViewCoSupervisor() {
  const [listTopic, setListTopics] = useState([]);
  const [selects, setSelects] = useState();

  useEffect(() => {
    const getListTopics = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/status/req")
        setListTopics(res.data);
        console.log('render');
      } catch (err) {
        console.log(err);
      }
    }
    getListTopics()
  }, []);

  function SearchItem() {
    console.log(gid)
    axios.get(`http://localhost:5000/api/rtopics/${selects}`)
      .then(res => {
        console.log(res.data)
        setListTopics(res.data)
      }).catch(err => console.error(err))
  }

  return (
    <div>
      <div className='container shadow my-5'>
        <div class="input-group">
          <div class="form-inline my-2 my-lg-0">
            <h5 className='grpid'>Select your Group ID</h5>
            <Button className='btn btn-primary search' onClick={() => { SearchItem({ selects }) }}>Search</Button>
            <select className='form-control select-gid' name="gid" id="gid" placeholder='Search your Group ID' value={selects} onChange={e => setSelects(e.target.value)}>
              <option>None</option>
              <option>G001</option>
              <option>G002</option>
              <option>G006</option>
              <option>G008</option>
            </select>
          </div> <br />
        </div>

        <table class="table">
          <thead className='table-dark'>
            <tr>
              <th scope='col'>No</th>
              <th scope="col">Group ID</th>
              <th scope="col">Topic Name</th>
              <th scope="col">Topic Category</th>
              <th scope='col'>Supervisor Response</th>
              <th scope='col'>Co-Supervisor Response</th>
              <th scope='col'>Request Co-Supervisor</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {
              listTopic.map((topic, id) => (
                <tr>
                  <td>{id + 1}</td>
                  <td>{topic.gid}</td>
                  <td>{topic.name}</td>
                  <td>{topic.interest}</td>
                  <td>{topic.status_sup}</td>
                  <td>{topic.status_co}</td>
                  <td><Link to={`/reqsent/${topic._id}`}><button className='btn btn-success'>Request</button></Link></td>
                </tr>
              )
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default ViewCoSupervisor