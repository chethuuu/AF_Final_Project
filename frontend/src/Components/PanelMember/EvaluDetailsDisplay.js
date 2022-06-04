import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default function EvaluDetailsDisplay(){

    const {id} = useParams("");

    const [Evaludetails, setEvaludetails] = useState({
        group_id:"",
        details:{
            subject:"", assignment:"", date:"", point:"", point1:"", point2:"", point3:"",
            marks:"", marks1:"", marks2:"", marks3:""
        },
        amount:"", amount1:"", amount2:"", amount3:"", total:"", feedback:""
    });

    useEffect(() =>{
        const getEvaluationMarks = async() =>{
            try{
                const res = await axios.get(`http://localhost:5000/evaluation/getone/${id}`)
                setEvaludetails(res.data);
            }catch(err){
                console.log.apply(err);
            }
        }
        getEvaluationMarks()
    },[]);


    return(
        <div>
            <br/>
            <div class="container shadow my-5 col-md-9 p-6 align-items-center">
                <div className="d-flex flex-column text-dark justify-content-center" > <br/>
                <h3 className=" fw-bolder mb-4"><center>Marks Evaluation Details</center></h3>  <br/>
                        <form>
                            <div className="form-row">
                                <div class="form-group col-md-4">
                                    <label >Group ID : {Evaludetails.group_id}</label>
                                </div>
                            </div>
                            
                            <div className="form-row">    
                                <div class="form-group col-md-4">
                                    <label for="name">Subject : {Evaludetails.details.subject}</label> 
                                </div>

                                <div className="form-group col-md-4">    
                                    <label for="name">Assignment  : {Evaludetails.details.assignment}</label>      
                                </div>

                                <div className="form-group col-md-4">    
                                    <label for="name">Deadline  : {Evaludetails.details.date}</label>
                                </div>
                            </div>


                            <div className="form-row">    
                                <div class="form-group col-md-4">
                                    <label for="name"><b>Points</b></label> 
                                </div>

                                <div className="form-group col-md-4">    
                                    <label for="name"><b>Marks Allocation</b> </label>
                                </div>

                                <div className="form-group col-md-4">    
                                    <label for="name"><b>Marks</b></label>
                                </div>
                            </div>


                            <div className="form-row">    
                                <div class="form-group col-md-4">
                                    <label for="name">{Evaludetails.details.point}</label>
                                </div>

                                <div className="form-group col-md-4">    
                                     <label for="name">{Evaludetails.details.marks}</label>   
                                </div>

                                <div className="form-group col-md-4">    
                                    <label for="name">{Evaludetails.amount}</label>    
                                </div>
                            </div>


                            <div className="form-row">    
                                <div class="form-group col-md-4">
                                    <label for="name">{Evaludetails.details.point1}</label>     
                                </div>

                                <div className="form-group col-md-4">    
                                <label for="name">{Evaludetails.details.marks1}</label> 
                                </div>

                                <div className="form-group col-md-4">    
                                <label for="name">{Evaludetails.amount1}</label>    
                                </div>
                            </div>


                            <div className="form-row">    
                                <div class="form-group col-md-4">
                                <label for="name">{Evaludetails.details.point2}</label>  
                                </div>

                                <div className="form-group col-md-4">    
                                <label for="name">{Evaludetails.details.marks2}</label>    
                                </div>

                                <div className="form-group col-md-4">    
                                <label for="name">{Evaludetails.amount2}</label>    
                                </div>
                            </div>

                            <div className="form-row">    
                                <div class="form-group col-md-4">
                                <label for="name">{Evaludetails.details.point3}</label>  
                                </div>

                                <div className="form-group col-md-4">    
                                <label for="name">{Evaludetails.details.marks3}</label>    
                                </div>

                                <div className="form-group col-md-4">    
                                <label for="name">{Evaludetails.amount3}</label>    
                                </div>
                            </div>


                            <div className="form-row">    
                                <div className="form-group col-md-4">   
                                    <label for="name"><b>Feedback :</b> {Evaludetails.feedback}</label>
                                </div>

                                <div className="form-group col-md-4">   
                                    <label for="name">.</label>
                                </div>

                                <div className="form-group col-md-4">    
                                    <label for="name"><b>Total : </b>{Evaludetails.total}</label>   
                                </div>
                            </div>

                            <center>
                                
                            </center>
                            
                        </form>

                </div>
            </div>
        </div>
    )
}