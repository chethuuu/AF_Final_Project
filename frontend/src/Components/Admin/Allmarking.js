import React, {useState, useEffect  } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap';

export default function Allmarking() {

    const [marking, setMarking] = useState([]);

    useEffect(()=>{
        function getMarking(){
            axios.get("http://localhost:5000/marking").then((res)=>{
                console.log(res.data);
                setMarking(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getMarking();
    },[])
    return(
        <div  class="container shadow my-5 col-md-9 p-6 align-items-center">
            <h1>Marking Scheme details</h1>
            <table class="table">
                <thead  class="thead-dark">
                    <tr>
                        <th scope="col">Subject</th>
                        <th scope="col">Assigenment</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        marking.map(items=>(
                            <tr key={items._id}>
                                <th scope="row">{items.subject}</th>
                                <td>{items.assignment}</td>
                                 <td><Link to={`/singlemarking/${items._id}`}><Button>View</Button></Link></td> 
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}