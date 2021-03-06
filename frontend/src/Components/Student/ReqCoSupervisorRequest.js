import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ReqCoSupervisorRequest = (props) => {

  const { id } = useParams("");

  const [inputs, setInputs] = useState({
    gid: "",
    lead_no: "",
    name: "",
    interest: "",
    request: "",
  });

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/rtopicsbyID/${id}`)
        setInputs(res.data);
        console.log('render');
      } catch (err) {
        console.log(err);
      }
    }
    getdata()
  }, []);


  function sendData(e) {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/rtopicss/${id}`, inputs)
      .then(res => {
        console.log(res.data)
        alert("Request Sent to the Supervisor Successfully")
        props.history.push('/viewcostu');
      }).catch((err) => {
        alert(err)
        console.error(err)
      })
  }


  return (
    <div>
      <div className="container shadow my-5 mx-auto w-50">
        <div className="col p-5 mx-auto">
          <h3 className=" fw-bolder mb-4"><center> Request Co-Supervisor </center></h3>
          <form onSubmit={sendData}>
            <div class="mb-3">
              <label for="gid" class="form-label">Group ID</label>
              <input name="gid" value={inputs.gid} onChange={(e) => { setInputs({ gid: e.target.value }) }} type="text" class="form-control" id="gid" placeholder='Enter Group ID' readOnly />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">Research Topic</label>
              <input name="name" value={inputs.name} onChange={(e) => { setInputs({ name: e.target.value }) }} type="text" class="form-control" placeholder='Enter Research Topic' readOnly />
            </div>
            <div class="mb-3">
              <label for="interest" class="form-label">Topic Category</label>
              <input name="interest" value={inputs.interest} onChange={(e) => { setInputs({ interest: e.target.value }) }} type="text" class="form-control" id="interest" placeholder="Eneter Research Topic Category" readOnly />
            </div>
            <div className='row py-6'>
              <div class="col-md-5">
                <label for="request" class="form-label">Request Status Changed to</label>
              </div>
              <div className='col-md-4'>
                <select class="custom-select" id="request" type="request"
                  name="request" value={inputs.request} onChange={(e) => { setInputs({ request: e.target.value }) }}>
                  <option selected>Choose...</option>
                  <option value="Requested">Requested</option>
                </select>
              </div>
            </div>
            <br />
            <button type="submit" class="btn btn-danger w-100 rounded-pill">Request Co-Supervisor</button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default ReqCoSupervisorRequest;
