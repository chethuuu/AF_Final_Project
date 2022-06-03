import React, {useState, useEffect  } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap';

export default function markingSchemas() {

    const [marking, setMarking] = useState([]);

    useEffect(() => {
        const getMarking = async() => {
            try {
                const res = await axios.get('http://localhost:5000/marking')
                setMarking(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getMarking()
    },[]);

    return(
        <div  class="container shadow my-5 col-md-9 p-6 align-items-center">
            <h1>Marking Schemes</h1>
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
                        marking.map((scheme,id)=>(
                            <tr key={id}>
                                <td>{scheme.subject}</td>
                                <td>{scheme.assignment}</td>
                                <td>
                                    <Link to={`/evaluation/${scheme._id}`}><Button>Evaluate</Button></Link>
                                </td> 
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}