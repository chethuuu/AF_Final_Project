import React, { useState } from "react";
import axios from "axios";

export default function AddMarking(){

    const[subject,setSubject]=useState("");
    const[assignment,setAssignment]=useState("");
    const[date,setDate]=useState("");
    const[point,setPoint]=useState("");
    const[marks,setMarks]=useState("");
    const[point1,setPoint1]=useState("");
    const[marks1,setMarks1]=useState("");
    const[point2,setPoint2]=useState("");
    const[marks2,setMarks2]=useState("");
    const[point3,setPoint3]=useState("");
    const[marks3,setMarks3]=useState("");
    
    

    function sentMarkingData(e){
        e.preventDefault();
       
        /*alert("insert");*/
        const newMarking={
            subject,
            assignment,
            date,
            point,
            marks,
            point1,
            marks1,
            point2,
            marks2,
            point3,
            marks3

        }
        
        axios.post("http://localhost:5000/marking/add",newMarking).then(()=>{
            alert("Marking added")
        }).catch((err)=>{
            alert(err)
        })
    }
    
    
        return(
        <div class="row">
        <div class="col-11">
        <div className="container shadow my-5 col-md-9 p-6 align-items-center">
            <div className=" d-flex flex-column align-items-center text-dark justify-content-center">
                <h1 className=" fw-bolder">Marking Shcema Creation</h1>
                <p className="lead text-center">Enter Marking Schema Details</p>
              
               
            </div>
            <form onSubmit={sentMarkingData}>
                <div className="form-check">
                    <label for="subject">Subject</label>
                    <input type="text" className="form-control" id="subject"  placeholder="Enter subject" onChange={(e)=>{
                        setSubject(e.target.value);
                    }}></input>
                    
                </div>
                <div className="form-check">
                    <label for="assignment">Assigenment</label>
                    <input type="text" className="form-control" id="assignment" placeholder="Assignment" onChange={(e)=>{
                        setAssignment(e.target.value);
                    }}></input>
                </div>
                <div className="form-check">
                <label for="date">Date of deadline</label>
                    <input type="date" className="form-control" id="date" placeholder="Date of deadline" onChange={(e)=>{
                        setDate(e.target.value);
                    }}></input>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div className="form-check">
                                <label for="point">Marking Point</label>
                                <input name="service" type="text" className="form-control" id="point" placeholder="Marking point" onChange={(e)=>{
                                setPoint(e.target.value);
                                }}></input>
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <div className="form-check">
                                <label for="marks">Marks</label>
                                <input type="text" className="form-control" id="marks" placeholder="Marks" onChange={(e)=>{
                                setMarks(e.target.value);
                                }}></input>
                            </div>
                        </div>                       
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div className="form-check">
                                <label for="point1">Marking Point</label>
                                <input name="service" type="text" className="form-control" id="point1" placeholder="Marking point" onChange={(e)=>{
                                setPoint1(e.target.value);
                                }}></input>
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <div className="form-check">
                                <label for="marks1">Marks</label>
                                <input type="text" className="form-control" id="marks1" placeholder="Marks" onChange={(e)=>{
                                setMarks1(e.target.value);
                                }}></input>
                            </div>
                        </div>                       
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div className="form-check">
                                <label for="point2">Marking Point</label>
                                <input name="service" type="text" className="form-control" id="point2" placeholder="Marking point" onChange={(e)=>{
                                setPoint2(e.target.value);
                                }}></input>
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <div className="form-check">
                                <label for="marks2">Marks</label>
                                <input type="text" className="form-control" id="marks2" placeholder="Marks" onChange={(e)=>{
                                setMarks2(e.target.value);
                                }}></input>
                            </div>
                        </div>                       
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div className="form-check">
                                <label for="point3">Marking Point</label>
                                <input name="service" type="text" className="form-control" id="point3" placeholder="Marking point" onChange={(e)=>{
                                setPoint3(e.target.value);
                                }}></input>
                            </div>
                        </div>
                        <div class="col-md-auto">
                            <div className="form-check">
                                <label for="marks3">Marks</label>
                                <input type="text" className="form-control" id="marks3" placeholder="Marks" onChange={(e)=>{
                                setMarks3(e.target.value);
                                }}></input>
                            </div>
                        </div>                       
                    </div>
                </div>
                <br></br><br></br>

                <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>
                <br></br> <br></br> <br></br> 
               
            </form>
            
           
        </div>
        </div>
        <div class="col-1">
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
            <h1><a href="/allmarking" class="badge badge-secondary">Marking</a></h1>
         
        </div>
        </div>
        ) 
    
}