import React, {useState, useEffect  } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap';

export default function ViewMarkSchemaSup() {

    const [marking, setMarking] = useState([]);

    useEffect(() => {
        const getMarking = async() => {
            try {
                const res = await axios.get('http://localhost:5000/marking/mark/filter/doc')
                setMarking(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getMarking()
    },[]);

    return(
        <div>
            <div> 
                <br/><br/>
                
            </div>

        <div  class="container shadow my-5 col-md-9 p-6 align-items-center"> <br/>
            <h3 className=" fw-bolder mb-4"><center>Documentation Marking Schemas</center></h3>
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
                                    <Link to={`/supevaluate/${scheme._id}`}><Button className='btn btn-danger'>Evaluate</Button></Link>
                                </td> 
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Link className='navbar-brand fs-4 text-dark' to={`/allsupevaluate`}><button className='btn btn-success mx-auto'>Evaluated Marking List</button></Link> 

        </div>
        </div>
    )
}