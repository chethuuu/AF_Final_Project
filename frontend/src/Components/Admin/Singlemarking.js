import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'

export default function Allmarking() {

    const [marking, setMarking] = useState([]);

    useEffect(() => {
        function getMarking() {
            axios.get("http://localhost:5000/marking").then((res) => {
                console.log(res.data);
                setMarking(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getMarking();
    }, [])
    return (
        <div>
            <hi>Marking Schemes</hi>


            <table class="table table-sm">
                <thead>
                    <tr>

                        <th scope="col">Subject</th>
                        <th scope="col">Assigenment</th>
                        <th scope="col">Date of deadline</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        marking.map(items => (
                            <tr>


                                <th>{items.subject}</th>
                                <td>{items.assignment}</td>
                                <td>{items.date}</td>
                                <td>
                                    <tr>
                                        <td>{items.point}</td>
                                        <td>{items.marks}</td>
                                    </tr>
                                    <tr>
                                        <td>{items.point1}</td>
                                        <td>{items.marks1}</td>
                                    </tr>
                                    <tr>
                                        <td>{items.point2}</td>
                                        <td>{items.marks2}</td>
                                    </tr>
                                    <tr>
                                        <td>{items.point3}</td>
                                        <td>{items.marks3}</td>
                                    </tr>
                                </td>
                            </tr>


                        ))
                    }
                </tbody>
            </table>



            <br></br>








        </div>



    )
}