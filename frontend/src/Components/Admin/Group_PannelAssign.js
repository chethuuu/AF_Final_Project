import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';

export default function Group_PannelAssign(){

    const {id} = useParams("");

    const [groupDetails, setGroupDetails] = useState({
        user_id:"", group_id:"", pannel_status:"",
    });

    const [panelDetails, setPanelDetails] = useState({
        pannel:{ 
            panel1:{ ID: "", name:"", email: ""},
            panel2:{ ID: "",name:"", email: ""}
        }
    });

    const [panelMembers, setPanel] = useState([]);
    const [panelMembers2, setPanel2] = useState([]);
    const [onePanelMember, setonePanelMember] = useState([]);
    const [secondPanelMember, setSecondPanelMember] = useState([]);
    
    useEffect(() =>{
        const getGroupData = async() =>{
            try{
                const res = await axios.get(`http://localhost:5000/group/getone/${id}`)
                setGroupDetails(res.data);
                const resul = await axios.get("http://localhost:5000/user/getpanel/filter")
                setPanel(resul.data);
                setPanel2(resul.data)
            }catch(err){
                console.log.apply(err);
            }
        }
        getGroupData()
    },[]);


    function getPanelDetails(){
        const ele = document.getElementById("_id");
        if(ele != null){
            var selectId = document.getElementById("_id").value;
        }else{
            //selectId = "62913beaa4be8d56a65fd36c"
        }

        axios.get(`http://localhost:5000/user/user/${selectId}`)
        .then(res=>{
        setonePanelMember(res.data)
         }).catch(err=>console.error(err))
    }

    function getsecondPanelMember(){
        const ele = document.getElementById("_id2");
        if(ele != null){
            var selectId = document.getElementById("_id2").value;
        }else{
            //selectId = "62913beaa4be8d56a65fd36c"
        }

        axios.get(`http://localhost:5000/user/user/${selectId}`)
        .then(res=>{
            setSecondPanelMember(res.data)
         }).catch(err=>console.error(err))
    }


    return(
        <div>
            
            <div class="card">
                <center>
                    <div class="card-header">
                        <h5>Panel Assign</h5>
                    </div>
                </center>

                <div class="card-body">  
                    <label><b>Group ID: </b>{groupDetails.group_id}</label> <br/>
                    <label><b>Student ID: </b>{groupDetails.user_id}</label><br/>
                    <label><b>Panel Status : </b>{groupDetails.pannel_status}</label>
                </div>


                <div class="row">
                    
                <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title"><u>Pannel Member 2</u></h6>
                                <select class="custom-select" id="_id" type="text"
                                    name="_id"  onChange={e =>getPanelDetails()}>
                                    {
                                    panelMembers.map(members => (
                                        <option value={members._id} key={members._id}>
                                        {members.name}
                                        </option>
                                    ))
                                    }
                                </select>

                                <form  >
                                    <div className="form-check">
                                        <label for="name">Name </label>
                                        <input type="text" className="form-control" id="name" 
                                        value={onePanelMember.name}></input> 
                                    </div>
                                    <div className="form-check">
                                        <label for="name">Email</label>
                                        <input type="text" className="form-control" id="name"
                                        value={onePanelMember.email}></input> 
                                    </div>
                                    <div className="form-check">
                                        <label for="name">Contact No</label>
                                        <input type="text" className="form-control" id="name"
                                        value={onePanelMember.contact}></input> 
                                    </div>
                                </form>

                                
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title"><u>Pannel Member 2</u></h6>
                                <select class="custom-select" id="_id2" type="text"
                                    name="_id"  onChange={e =>getsecondPanelMember()}>
                                    {
                                    panelMembers2.map(members2 => (
                                        <option value={members2._id} key={members2._id} >
                                        {members2.name}
                                        </option>
                                    ))
                                    }
                                </select>

                                <form>
                                    <div className="form-check">
                                        <label for="name">Name </label>
                                        <input type="text" className="form-control" id="name" 
                                        value={secondPanelMember.name}></input> 
                                    </div>
                                    <div className="form-check">
                                        <label for="name">Email</label>
                                        <input type="text" className="form-control" id="name"
                                        value={secondPanelMember.email}></input> 
                                    </div>
                                    <div className="form-check">
                                        <label for="name">Contact No</label>
                                        <input type="text" className="form-control" id="name"
                                        value={secondPanelMember.contact}></input> 
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}