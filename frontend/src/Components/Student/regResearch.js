import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const ResearchTopic = () => {

  //const history = useNavigate();

  const [inputs, setInputs] = useState({
    gid: "",
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
      <form onSubmit={handleSubmit}>
        <input name="gid" value={inputs.gid} onChange={onChangeInput} type="text" id="gid" placeholder="gid" required /> <br />
        <input name="name" value={inputs.name} onChange={onChangeInput} type="text" id="name" placeholder="name" required /> <br />
        <input name="interest" value={inputs.interest} onChange={onChangeInput} type="text" id="interest" placeholder="interest" required /><br />
        <button type="submit"> Register </button>
        <NavLink to="/viewreg"><button type="submit"> View Register Topic </button></NavLink>
      </form>
    </div>
  )
}

export default ResearchTopic;