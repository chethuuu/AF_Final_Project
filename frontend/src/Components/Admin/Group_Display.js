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
                const res = await axios.get('http://localhost:5000/group/getdata/assigned')
                setGroups(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getGroupList()
    },[]);

    return(
        <div>
            <div className='groupTable'> 
            <div className="container shadow py-3">
            <h3 className=" fw-bolder mb-4"><center>Downloads Documents</center></h3><br/>
                <table className="table">
                    <thead className='table-dark'>
                        <tr  key={"1"}>
                            <th> Group ID</th>
                            <th> Student ID </th>
                            <th> Panel Status </th>
                            <th> View Details </th>
                            
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                    {
                        groupList.map((groups, id) => (
                            <tr key={id}>
                                <td>{groups.group_id}</td>
                                <td>{groups.user_id}</td>
                                <td>{groups.pannel_status}</td>

                                <td>
                                    <Link to={`/viewGroup/${groups._id}`}><Button className='btn btn-warning'>View Details</Button></Link>
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