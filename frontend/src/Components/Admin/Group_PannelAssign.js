import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';

export default function Group_PannelAssign(){

    const {id} = useParams("");

    const [groupDetails, setGroupDetails] = useState({
        user_id:"", group_id:"", pannel_status:"",
    });

    const [panelMembers, setPanel] = useState([]);
    const [panelMembers2, setPanel2] = useState([]);

    const [onePanelMember, setonePanelMember] = useState({
        _id:"", name:"", email:""
    });
    const [secondPanelMember, setSecondPanelMember] = useState({
        _id:"", name:"", email:""
    });
    
    useEffect(() =>{
        const getGroupData = async() =>{
            try{
                const res = await axios.get(`http://localhost:5000/group/getone/${id}`)
                setGroupDetails(res.data);
                const resul = await axios.get("http://localhost:5000/user/getpanel/filter")
                setPanel(resul.data)
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
            
        }

        axios.get(`http://localhost:5000/user/user/${selectId}`)
        .then(res=>{
            setSecondPanelMember(res.data)
         }).catch(err=>console.error(err))
    }

    const [pannel, setPanelDetails] = useState({
        pannel_status:"Assigned",
        pannel:{
            panel1:{ ID: "", name:"", email: ""},
            panel2:{ ID: "",name:"", email: ""}
        }
    });


    function sendData(e){
        e.preventDefault();
        axios.put(`http://localhost:5000/group/panelAsign/${id}`, pannel)
        .then(res=>{
          console.log(res.data)
          alert("Panel Added")
        }).catch((err) =>{
            alert(err)
            console.error(err)
            
        })
    }


    return(
        <div className='container shadow py-3'><br/>
            
            <div class="">
            <h3 className=" fw-bolder mb-4"><center>Panel Assign</center></h3>

                <div class="card-body">  
                    <label><b>Group ID: </b>{groupDetails.group_id}</label> <br/>
                    <label><b>Student ID: </b>{groupDetails.user_id}</label><br/>
                    <label><b>Panel Status : </b>{groupDetails.pannel_status}</label>
                </div>

                <form onSubmit={sendData}>
                <div class="row">
                    
                <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title"><u>Pannel Member 01</u></h6>
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

                                
                                    <div className="form-check">
                                        <label for="name">ID</label>
                                        <input type="text" className="form-control" id="ID" placeholder="Student Id"
                                        value={onePanelMember._id}
                                        onChange={(e) =>{
                                            setPanelDetails({...pannel, ID: e.target.value});
                                        }}></input> 
                                    </div>

                                   

                                    <div className="form-check">
                                        <label for="name">Name</label>
                                        <input type="text" className="form-control" id="name" name='name'
                                        value={onePanelMember.name}
                                        onChange={(e) =>{
                                            setPanelDetails({...pannel, name: e.target.value});
                                        }}></input> 
                                    </div>
                                    <div className="form-check">
                                        <label for="name">Email</label>
                                        <input type="text" className="form-control" id="name"
                                        value={onePanelMember.email}
                                        onChange={(e) =>{
                                            setPanelDetails({...pannel, email: e.target.value});
                                        }}></input> 
                                    </div>
                                

                                
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title"><u>Pannel Member 02</u></h6>
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

                                
                                    <div className="form-check">
                                        <label for="name">ID </label>
                                        <input type="text" className="form-control" id="name" 
                                        value={secondPanelMember._id}
                                        onChange={(e) =>{
                                            setPanelDetails({...pannel, ID: e.target.value});
                                        }}></input> 
                                    </div>
                                    <div className="form-check">
                                        <label for="name">Name</label>
                                        <input type="text" className="form-control" id="name"
                                        value={secondPanelMember.name}
                                        onChange={(e) =>{
                                            setPanelDetails({...pannel, name: e.target.value});
                                        }}></input> 
                                    </div>
                                    <div className="form-check">
                                        <label for="name">Email</label>
                                        <input type="text" className="form-control" id="name"
                                        value={secondPanelMember.email}
                                        onChange={(e) =>{
                                            setPanelDetails({...pannel, email: e.target.value});
                                        }}></input> 
                                    </div>
                            </div>
                        </div>
                    </div>
                   
                                     <div className="form-check">
                                        <label for="name">Status changed to</label>
                                        <input type="text" className="form-control" id="name"
                                        value="Assigned"
                                        onChange={(e) =>{setPanelDetails({pannel_status:e.target.value})
                                        }}></input> 
                                    </div>
                   
                </div> <br/>
                <button type="submit" className="btn btn-danger w-100 rounded-pill">Add Panel</button>
                </form>

            </div>

        </div>
    );
}