import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const ResearchTopic = () => {

  //const history = useNavigate();

  const [inputs, setInputs] = useState({
    gid: "",
    lead_no: "",
    name: "",
    interest: "",
  });

  const onChangeInput = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/rtopics", {
        gid: inputs.gid,
        lead_no: lead_no,
        name: inputs.name,
        interest: inputs.interest,
      })
      .catch((err) => window.alert("This Research Topic Already exist"))
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //send http request
    sendRequest()
      .then(() => window.alert("You Sucessfully Register for the Register Topic"));
  };

  return (
    <div>
      <div>
        <div className="container shadow my-5 mx-auto w-50">
          <div className="">
          </div>
          <div className="col p-5 mx-auto">
            <h1 className=" fw-bolder mb-5"><center>Register Research Topic</center></h1>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="gid" class="form-label">Group ID</label>
                <input name="gid" value={inputs.gid} onChange={onChangeInput} type="text" class="form-control" id="gid" placeholder='Enter Group ID' required />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Group Leader's IT Number</label>
                <input name="lead_no" value={inputs.lead_no} onChange={onChangeInput}  type="text" class="form-control" placeholder='Enter Group Leaders IT Number' required />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Research Topic</label>
                <input name="name" value={inputs.name} onChange={onChangeInput} type="text" class="form-control" placeholder='Enter Research Topic' required />
              </div>
              <div class="mb-3">
                <label for="interest" class="form-label">Topic Category</label>
                <input name="interest" value={inputs.interest} onChange={onChangeInput} type="text" class="form-control" id="interest" placeholder="Eneter Research Topic Category" required />
              </div>
              <p>Note:- Once you Register for a topic, you can't Research Topic it</p> <br />
              <button type="submit" class="btn btn-danger w-100 rounded-pill">Register Topic</button>
              <br />
              <NavLink to="/viewreg"><button className='btn btn-warning w-100 rounded-pill' type="submit"> View Register Topic </button></NavLink>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ResearchTopic;