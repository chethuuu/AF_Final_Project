import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateSupervisorReq = (props) => {

    const { id } = useParams("");

    const [inputs, setInputs] = useState({
        gid: "",
        lead_no: "",
        name: "",
        interest: "",
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
                alert("Research Topic Details Updated Sucessfully")
                props.history.push('/viewtopicsup');

            }).catch((err) => {
                alert(err)
                console.error(err)

            })
    }


    return (
        <div>
            <div>

                <div className="container shadow my-5 mx-auto w-50">
                    <div className="">
                    </div>
                    <div className="col p-5 mx-auto">
                        <h1 className=" fw-bolder mb-5"><center>Register Research Topic</center></h1>
                        <form onSubmit={sendData}>
                            <div class="mb-3">
                                <label for="gid" class="form-label">Group ID</label>
                                <input name="gid" value={inputs.gid} onChange={(e) =>{setInputs({gid:e.target.value})}} type="text" class="form-control" id="gid" placeholder='Enter Group ID' required />
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label">Group Leader's IT Number</label>
                                <input name="lead_no" value={inputs.lead_no} onChange={(e) =>{setInputs({lead_no:e.target.value})}} type="text" class="form-control" placeholder='Enter Research Topic' required />
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label">Research Topic</label>
                                <input name="name" value={inputs.name} onChange={(e) =>{setInputs({name:e.target.value})}} type="text" class="form-control" placeholder='Enter Research Topic' required />
                            </div>
                            <div class="mb-3">
                                <label for="interest" class="form-label">Topic Category</label>
                                <input name="interest" value={inputs.interest} onChange={(e) =>{setInputs({interest:e.target.value})}} type="text" class="form-control" id="interest" placeholder="Eneter Research Topic Category" required />
                            </div>
                            <br />
                            <button type="submit" class="btn btn-danger w-100 rounded-pill">Update Topic</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdateSupervisorReq;