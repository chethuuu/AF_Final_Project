import React from 'react';
import axios from 'axios';

export default function StuGroup_Create(){

    return(
        <div>
            <div class="container shadow my-5 col-md-9 p-6 align-items-center">
                <div className=" d-flex flex-column align-items-center text-dark justify-content-center form">
                    <h1 className="display-4 fw-bolder"> User Registration</h1>
                    <p className="lead text-center">Enter Your Credentials to Register</p>
                
                
                </div>
            
                    <form >

                        <div className="form-check">
                            <label for="name">Enter Name</label>
                            <input type="text" className="form-control" id="name"  placeholder="Enter Name"></input>       
                        </div>
                        <div className="form-check">
                            <label for="id">Student ID</label>
                            <input type="text" className="form-control" id="id" placeholder="Student Id"></input>
                        </div>
                        <div className="form-check">
                        <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email "></input>
                        </div>
                        <div className="form-check">
                        <label for="contact">Phone Number</label>
                            <input type="text" className="form-control" id="contact" placeholder="Enter phone number "></input>
                        </div>
                        <div className="form-check">
                        <label for="password">Enter password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password "></input>
                        </div><br></br>
                    
                        <div className="form-check">
                            <div class="row">
                                <div class="col-sm">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">User Type</label>
                                    </div>
                                    <select class="custom-select" id="type">
                                        <option selected>Choose...</option>
                                        <option value="Staff">Staff</option>
                                        <option value="Student">Student</option>
                                    </select>
                                    </div>
                                </div>
                                <div class="col-sm">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="role">Role</label>
                                    </div>
                                    <select class="custom-select" id="role">
                                        <option selected>Choose...</option>
                                        <option value="Supervisor">Supervisor</option>
                                        <option value="Co-Supervisor">Co-Supervisor</option>
                                        <option value="Panal Member">Panal Member</option>
                                        <option value="None">None</option>

                                    </select>
                                    </div>
                                </div>
                                <div class="col-sm">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="interest">Interest</label>
                                    </div>
                                    <select class="custom-select" id="interest">
                                        <option selected>Choose...</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="Information Technology">Information Technology</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                        <option value="Computer Networking">Computer Networking</option>
                                        <option value="None">None</option>

                                    </select>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                        <br></br><br></br><br></br><br></br>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    
                    </form>
           
            </div>
        </div>
    )

}