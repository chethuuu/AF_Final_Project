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

                <div className="container shadow my-5 mx-auto w-50">
                    <div className="col p-5 mx-auto">
                        <h1 className=" fw-bolder mb-5"><center>Supervisor Status</center></h1>
                        <form onSubmit={sendData}>
                            <div className="form-group">
                                <select className="form-control w-40" name='itemType'
                                    value={inputs.status_sup}
                                    onChange={(e) => { setInputs({ status_sup: e.target.value }) }}>
                                    <option>Pending</option>
                                    <option>Approved</option>
                                    <option>Reject</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-danger w-100 rounded-pill">Update Status</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdateStatusSup;