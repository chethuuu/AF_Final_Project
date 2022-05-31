import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const SendEmail = (props) => {

    const { id } = useParams("");

    const [inputs, setInputs] = useState({
        gid: "",
        lead_no: "",
        name: "",
        interest: "",
        status_sup:"",
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

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            "service_49jxxcr",
            "template_jjqou4p",
            e.target,
            "XzmS3GyvK-CTaZgHW"
        ).then(res => {
            Swal.fire("Congrats", "Successfully Send Email", "success"); {
            }
            console.log(res);
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <div>

                <div className="container shadow my-5 mx-auto w-50">
                    <div className="">
                    </div>
                    <div className="col p-5 mx-auto">
                        <h1 className=" fw-bolder mb-5"><center>Send Status as a E-mail</center></h1>
                        <form onSubmit={sendEmail}>
                            <div class="mb-3">
                                <label for="gid" class="form-label">Group ID</label>
                                <input name="gid" value={inputs.gid} type="text" class="form-control" id="gid" required/>
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label">Group Leader's E-mail</label>
                                <input name="lead_no" type="text" class="form-control"  required />
                            </div>
                            <div class="mb-3">
                                <label for="interest" class="form-label">Supervisor Status</label>
                                <input name="status_sup" value={inputs.status_sup}  type="text" class="form-control" id="interest" required />
                            </div>
                            <br />
                            <button type="submit" value="Send" class="btn btn-success w-100 rounded-pill"> Send E-mail </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SendEmail;