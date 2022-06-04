import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function AllEvaluateSup() {

    const [evaluList, setevaluList] = useState([]);


    useEffect(() => {
        const getEvaluationList = async () => {
            try {
                const res = await axios.get('http://localhost:5000/doc/getAllevaluation')
                setevaluList(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getEvaluationList()
    }, []);

    const delete_Schema = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/doc/scheme/delete/${id}`)
            const newevaluate = evaluList.filter(list => list._id !== id);
            setevaluList(newevaluate);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className='groupTable'>
                <div className="container shadow py-3"> <br/>
                <h3 className=" fw-bolder mb-4"><center> Evaluated Marking Scheme</center></h3>
                    <table className="table ">
                        <thead className='table-dark'>
                            <tr key={"1"}>
                                <th> Group ID</th>
                                <th> Subject </th>
                                <th> Assignment</th>
                                <th> View Details </th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                evaluList.map((list, id) => (
                                    <tr key={id}>
                                        <td>{list.group_id}</td>
                                        <td>{list.details.subject}</td>
                                        <td>{list.details.assignment}</td>

                                        <td>
                                            <Link to={`/supIndividual/${list._id}`}><Button className='btn btn-warning'>View Details</Button></Link>
                                        </td>
                                    <td><button className='btn btn-danger' onClick={() => delete_Schema(list._id)}>Delete</button></td>

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