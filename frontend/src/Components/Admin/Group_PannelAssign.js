import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function Group_PannelAssign(){

    const {id} = useParams("");

    const [groupDetails, setGroupDetails] = useState({
        user_id:"",
        group_id:"",
        pannel_status:"Not Assign",
    });

    const [panelDetails, setPanelDetails] = useState({
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

            </div>

        </div>
    );
}