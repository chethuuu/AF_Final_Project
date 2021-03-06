import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const SendEmailCo = (props) => {

    const { id } = useParams("");

    const [inputs, setInputs] = useState({
        gid: "",
        lead_no: "",
        lead_email: "",
        name: "",
        interest: "",
        status_sup: "",
        status_co: "",
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
            "template_8ugxjvp",
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
                        <h3 className=" fw-bolder mb-5"><center>Send Status to the Leader</center></h3>
                        <form onSubmit={sendEmail}>
                            <div class="mb-3">
                                <label for="gid" class="form-label">Group ID</label>
                                <input name="gid" value={inputs.gid} type="text" class="form-control" id="gid" readOnly />
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label">Group Leader's E-mail</label>
                                <input name="lead_no" value={inputs.lead_email} type="text" class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label for="interest" class="form-label">Co-Supervisor Status</label>
                                <textarea name="status_co" value={inputs.status_co} rows='3' type="text" class="form-control" id="interest" required />
                            </div>
                            <br />
                            <button type="submit" className='btn btn-primary w-100 rounded-pill'>
                                Send E-mail <i className='fa fa-paper-plane ms-2' />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SendEmailCo;