import React, { useState } from 'react'
import axios from 'axios'

const ResearchTopic = (props) => {

  const [inputs, setInputs] = useState({
    gid: "",
    lead_no: "",
    lead_email: "",
    name: "",
    interest: "",
    request: "",
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
        lead_no: inputs.lead_no,
        lead_email: inputs.lead_email,
        name: inputs.name,
        interest: inputs.interest,
      })
      .catch((err) => window.alert("This Research Topic is Already exist. Choose Another Topic"))
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //send http request
    sendRequest()
      .then(() => window.alert("You Sucessfully Register for the Register Topic"));
    props.history.push('/viewreg')
  };

  return (
    <div>
      <div>
        <div className="container shadow border border-5 my-5 mx-auto w-50">
          <div className="col p-3">
            <h3 className=" fw-bolder mb-4"><center>Register Research Topic</center></h3>
            <form onSubmit={handleSubmit}>
              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="gid" class="form-label">Group ID</label>
                  <input name="gid" value={inputs.gid} onChange={onChangeInput} type="text" class="form-control" id="gid" placeholder='Enter Group ID' required />
                </div>
                <div class="col-md-6">
                  <label for="name" class="form-label">Group Leader's IT Number</label>
                  <input name="lead_no" value={inputs.lead_no} onChange={onChangeInput} type="text" class="form-control" placeholder='Enter Group Leaders IT Number' required />
                </div>
              </div>
              <div className='row py-3'>
                <div class="col-md-6">
                  <label for="name" class="form-label">Group Leader's E-mail</label>
                  <input name="lead_email" value={inputs.lead_email} onChange={onChangeInput} type="text" class="form-control" placeholder='Enter Research Topic' required />
                </div>
                <div class="col-md-6">
                  <label for="name" class="form-label">Topic Category</label>
                  <select class="custom-select" id="interest" type="interest"
                    name="interest" value={inputs.interest} onChange={onChangeInput}>
                    <option selected>Choose Topic Category</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Computer Networking">Computer Networking</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Research Topic</label>
                <input name="name" value={inputs.name} onChange={onChangeInput} type="text" class="form-control" placeholder='Enter Research Topic' required />
              </div>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <label for="check">&nbsp;Once you Register for a Topic, You can't Change it</label><br></br>
              <br />
              <button type="submit" class="btn btn-primary w-100 rounded-pill">Register your Topic</button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchTopic;