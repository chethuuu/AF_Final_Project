import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Group_Display.css'
import {Button} from 'react-bootstrap';

export default function Group_Display(){

    const [groupList, setGroups] = useState([]);

    
    useEffect(() => {
        const getGroupList = async() => {
            try {
                const res = await axios.get('http://localhost:5000/group/getAllGroups')
                setGroups(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getGroupList()
    },[]);

    const [selects, setSelects] = useState();
    const s = {selects};


    function SearchGropus(){
        axios.get(`http://localhost:5000/group/getgroup/${selects}`)
        .then(res=>{
          console.log(res.data)
          setGroups(res.data);
        }).catch(err=>console.error(err))
    }
    



    return(
        <div>
            <div className='groupTable'>
            <div className="container ">
                <div> 
                    <select name="status" id="status" value={selects} onChange={e=>setSelects(e.target.value)}>
                        <option>Not assign</option>
                        <option>Assign</option>
                    </select>
                    <Button onClick={()=>{SearchGropus({selects})}}>Search</Button>
                </div>  
                <br/>

                <table className="table ">
                    <thead>
                        <tr  key={"1"}>
                            <th> Group ID</th>
                            <th> Student ID </th>
                            <th> Panel Status </th>

                            <div className="col-lg-9 mt-2 mb-2">
                            </div>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        groupList.map((groups, id) => (
                            <tr key={id}>
                                <td>{groups.group_id}</td>
                                <td>{groups.user_id}</td>
                                <td>{groups.pannel_status}</td>

                                <td>
                                    <Link to={`/panelAssign/${groups._id}`}><Button className='btn1'>Panel Assign</Button></Link>
                                </td>
                            
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}