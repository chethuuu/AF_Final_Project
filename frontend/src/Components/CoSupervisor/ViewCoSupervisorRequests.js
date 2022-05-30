import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';

function ViewCoSupervisorRequests() {
  const [listTopic, setListTopics] = useState([]);
  const [selects, setSelects] = useState();

  useEffect(() => {
    const getListTopics = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/rtopics/')
        setListTopics(res.data);
        console.log('render');
      } catch (err) {
        console.log(err);
      }
    }
    getListTopics()
  }, []);

  function SearchItem() {
    console.log(status_sup)
    axios.get(`http://localhost:5000/api/rtopics/status/${selects}`)
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
            <h5 className='grpid'>Select Status</h5>
            <Button className='btn btn-primary search' onClick={() => { SearchItem({ selects }) }}>Search</Button>
            <select className='form-control select-gif' name="status_sup" id="status_sup" value={selects} onChange={e => setSelects(e.target.value)}>
              <option>None</option>
              <option>Approved</option>
              <option>Reject</option>
              <option>Pending</option>
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
              <th scope='col'>Supervisor Status</th>
              <th scope='col'>Co-Supervisor Status</th>
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


export default ViewCoSupervisorRequests