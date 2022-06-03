import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function Group_viewDetails(){

    const {id} = useParams("");

    const [groupDetails, setGroupDetails] = useState({
        user_id:"",
        group_id:"",
        leader:{name:"", ID:"", contact:"", email:""},
        member1:{name:"", ID:"", contact:"", email:""},
        member2:{name:"", ID:"", contact:"", email:""},
        member3:{name:"", ID:"", contact:"", email:""},
        pannel_status:"",
        pannel:{ 
            panel1:{ ID: "", name:"", email: ""},
            panel2:{ ID: "",name:"", email: ""}
        }
        
    });

    useEffect(() =>{
        const getGroupData = async() =>{
            try{
                const res = await axios.get(`http://localhost:5000/group/getone/${id}`)
                setGroupDetails(res.data);
            }catch(err){
                console.log.apply(err);
            }
        }
        getGroupData()
    },[]);


    return(
        
        <div className='container shadow py-3'> <br/>
            

            <div class="">
                
            <h3 className=" fw-bolder mb-4"><center>Student Group Details</center></h3>
                <div class="card-body">  
                    <label><b>Group ID: </b>{groupDetails.group_id}</label> <br/>
                    <label><b>Student ID: </b>{groupDetails.user_id}</label><br/>
                    <label><b>Panel Status : </b>{groupDetails.pannel_status}</label>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title"><u>Group Leader Details</u></h6>
                                <label><b>Student ID: </b>{groupDetails.leader.ID}</label><br/>
                                <label><b>Student name: </b>{groupDetails.leader.name}</label><br/>
                                <label><b>Email: </b>{groupDetails.leader.email}</label><br/>
                                <label><b>Contact : </b>{groupDetails.leader.contact}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title"><u>Member 2 Details</u></h6>
                                <label><b>Student ID: </b>{groupDetails.member1.ID}</label><br/>
                                <label><b>Student name: </b>{groupDetails.member1.name}</label><br/>
                                <label><b>Email: </b>{groupDetails.member1.email}</label><br/>
                                <label><b>Contact : </b>{groupDetails.member1.contact}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title"><u>Member 3 Details</u></h6>
                                <label><b>Student ID: </b>{groupDetails.member2.ID}</label><br/>
                                <label><b>Student name: </b>{groupDetails.member2.name}</label><br/>
                                <label><b>Email: </b>{groupDetails.member2.email}</label><br/>
                                <label><b>Contact : </b>{groupDetails.member2.contact}</label> 
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title"><u>Member 4 Details</u></h6>
                                <label><b>Student ID: </b>{groupDetails.member3.ID}</label><br/>
                                <label><b>Student name: </b>{groupDetails.member3.name}</label><br/>
                                <label><b>Email: </b>{groupDetails.member3.email}</label><br/>
                                <label><b>Contact : </b>{groupDetails.member3.contact}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title"><u>Pannel Member 1</u></h6>
                                <label><b>ID: </b>{groupDetails.pannel.panel1.ID}</label><br/>
                                <label><b>Name : </b>{groupDetails.pannel.panel1.name}</label> <br/>
                                <label><b>Email: </b>{groupDetails.pannel.panel1.email}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title"><u>Pannel Member 2</u></h6>
                                <label><b>ID: </b>{groupDetails.pannel.panel2.ID}</label><br/>
                                <label><b>Name : </b>{groupDetails.pannel.panel2.name}</label> <br/>
                                <label><b>Email: </b>{groupDetails.pannel.panel2.email}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}