import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateStatusSup = (props) => {

    const { id } = useParams("");

    const [inputs, setInputs] = useState({
        status_sup: "",
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
                alert("Research Topic Status Updated Sucessfully")
                props.history.push('/viewtopicsup');

            }).catch((err) => {
                alert(err)
                console.error(err)

            })
    }


    return (
        <div>
            <div>
            <br/><br/>
                <div className="container shadow my-5 update-status">
                    <div className="col p-5 mx-auto">
                        <h3 className=" fw-bolder mb-5"><center>Update Supervisor Status</center></h3>
                        <form onSubmit={sendData}>
                            <div className="form-group">
                                <select className="form-control" name='itemType'
                                    value={inputs.status_sup}
                                    onChange={(e) => { setInputs({ status_sup: e.target.value }) }}>
                                    <option>Pending</option>
                                    <option>Approved</option>
                                    <option>Reject</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 rounded-pill">Update Status</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdateStatusSup;