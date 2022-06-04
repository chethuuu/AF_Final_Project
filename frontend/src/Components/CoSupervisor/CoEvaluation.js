import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function CoEvaluation() {

    //get object id from urm parameter
    const { id } = useParams("");

    const [group_id, setgroup_id] = useState("");
    const [details, setdetails] = useState({
        subject: "", assignment: "", date: "",
        point: "", point1: "", point2: "", point3: "",
        marks: "", marks1: "", marks2: "", marks3: ""
    });
    const [amount, setamount] = useState("");
    const [amount1, setamount1] = useState("");
    const [amount2, setamount2] = useState("");
    const [amount3, setamount3] = useState("");
    const [total, settotal] = useState("");
    const [feedback, setfeedback] = useState("");

    //refresh form data after submitting data
    const resetForm = () => {
        setgroup_id({ group_id: "" });
        setdetails({
            subject: "", assignment: "", date: "",
            point: "", point1: "", point2: "", point3: "",
            marks: "", marks1: "", marks2: "", marks3: ""
        });
        setamount({ amount: "" });
        setamount1({ amount1: "" });
        setamount2({ amount2: "" });
        setamount3({ amount3: "" });
        settotal({ total: "" });
        setfeedback({ feedback: "" });
    }

    //track specific Marking scheme data to setScheme 
    useEffect(() => {
        const getMarking = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/marking/marking/${id}`)
                setdetails(res.data);
            } catch (err) {
                console.log.apply(err);
            }
        }
        getMarking()
    }, []);


    //Data send to the database
    function sendData(e) {
        e.preventDefault();
        const newEval = {
            group_id, details, amount, amount1, amount2, amount3, total, feedback
        }
        axios.post("http://localhost:5000/doc/add", newEval).then(() => {
            alert("Successfully Saved");
            resetForm();
        }).catch((err) => {
            alert(err)
        });
    }


    return (
        <div>
            <br />
            <div class="container shadow my-5 col-md-9 p-6 align-items-center">
                <div className="d-flex flex-column text-dark justify-content-center" > <br />
                    <h3 className=" fw-bolder mb-4"><center>Documentation Evaluation Scheme</center></h3>
                    <form onSubmit={sendData} >
                        <div className="form-row">
                            <div class="form-group col-md-4">
                                <label for="name">Group ID :</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Group Id"
                                    value={group_id.group_id}
                                    onChange={(e) => {
                                        setgroup_id(e.target.value);
                                    }}></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div class="form-group col-md-4">
                                <label for="name">Type</label>
                                <input type="text" className="form-control" id="name"
                                    value={details.subject}
                                    onChange={(e) => {
                                        setdetails({ ...details, subject: e.target.value });
                                    }} readOnly></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label for="name">Assignment</label>
                                <input type="text" className="form-control" id="name"
                                    value={details.assignment}
                                    onChange={(e) => {
                                        setdetails({ ...details, assignment: e.target.value });
                                    }} readOnly></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label for="name">Deadline</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Name"
                                    value={details.date}
                                    onChange={(e) => {
                                        setdetails({ ...details, date: e.target.value });
                                    }} readOnly></input>
                            </div>
                        </div>


                        <div className="form-row">
                            <div class="form-group col-md-4">
                                <label for="name">Point</label>
                                <input type="text" className="form-control" id="name"
                                    value={details.point}
                                    onChange={(e) => {
                                        setdetails({ ...details, point: e.target.value });
                                    }} readOnly></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label for="name">Allocation</label>
                                <input type="text" className="form-control" id="name"
                                    value={details.marks}
                                    onChange={(e) => {
                                        setdetails({ ...details, marks: e.target.value });
                                    }} readOnly></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label for="name">Marks</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Marks"
                                    value={amount.amount}
                                    onChange={(e) => {
                                        setamount(e.target.value);
                                    }}></input>
                            </div>
                        </div>


                        <div className="form-row">
                            <div class="form-group col-md-4">
                                <input type="text" className="form-control" id="name"
                                    value={details.point1}
                                    onChange={(e) => {
                                        setdetails({ ...details, point1: e.target.value });
                                    }} readOnly></input>
                            </div>

                            <div className="form-group col-md-4">
                                <input type="text" className="form-control" id="name"
                                    value={details.marks1}
                                    onChange={(e) => {
                                        setdetails({ ...details, marks1: e.target.value });
                                    }} readOnly></input>
                            </div>

                            <div className="form-group col-md-4">
                                <input type="text" className="form-control" id="name" placeholder="Enter Marks"
                                    value={amount1.amount1}
                                    onChange={(e) => {
                                        setamount1(e.target.value);
                                    }}></input>
                            </div>
                        </div>


                        <div className="form-row">
                            <div class="form-group col-md-4">
                                <input type="text" className="form-control" id="name"
                                    value={details.point2}
                                    onChange={(e) => {
                                        setdetails({ ...details, point2: e.target.value });
                                    }} readOnly></input>
                            </div>

                            <div className="form-group col-md-4">
                                <input type="text" className="form-control" id="name"
                                    value={details.marks2}
                                    onChange={(e) => {
                                        setdetails({ ...details, marks2: e.target.value });
                                    }} readOnly></input>
                            </div>

                            <div className="form-group col-md-4">
                                <input type="text" className="form-control" id="name" placeholder="Enter Marks"
                                    value={amount2.amount2}
                                    onChange={(e) => {
                                        setamount2(e.target.value);
                                    }}></input>
                            </div>
                        </div>


                        <div className="form-row">
                            <div class="form-group col-md-4">
                                <input type="text" className="form-control" id="name"
                                    value={details.point3}
                                    onChange={(e) => {
                                        setdetails({ ...details, point3: e.target.value });
                                    }} readOnly></input>
                            </div>

                            <div className="form-group col-md-4">
                                <input type="text" className="form-control" id="name"
                                    value={details.marks3}
                                    onChange={(e) => {
                                        setdetails({ ...details, marks3: e.target.value });
                                    }} readOnly></input>
                            </div>

                            <div className="form-group col-md-4">
                                <input type="text" className="form-control" id="name" placeholder="Enter Marks"
                                    value={amount3.amount3}
                                    onChange={(e) => {
                                        setamount3(e.target.value);
                                    }}></input>
                            </div>
                        </div>


                        <div className="form-row">
                            <div className="form-group col-md-8">
                                <label for="name">Feedback</label>
                                <textarea type="text" className="form-control" id="name" placeholder="Enter Feedback"
                                    value={feedback.feedback}
                                    onChange={(e) => {
                                        setfeedback(e.target.value);
                                    }} />
                            </div>

                            <div className="form-group col-md-4">
                                <label for="name">Total</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Total"
                                    value={total.total}
                                    onChange={(e) => {
                                        settotal(e.target.value);
                                    }}></input>
                            </div>
                        </div>

                        <center>
                            <button type="submit" class="btn btn-danger w-100 rounded-pill">Save</button>
                        </center>

                    </form>

                </div>
            </div>
        </div>
    )
}