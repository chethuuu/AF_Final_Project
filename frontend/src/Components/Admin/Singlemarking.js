import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom'

export default function Allmarking() {

    const [marking, setMarking] = useState([]);
    const { id } = useParams("");


    useEffect(() => {
        const getMarking = async () => {

            try {

                const res = await axios.get(`http://localhost:5000/marking/marking/${id}`)

                setMarking(res.data);

            } catch (err) {

                console.log.apply(err);

            }

        }

        getMarking()

    }, []);
    return (
        <div class="container shadow my-5 col-md-10 p-8 align-items-center">
            <hi>Marking Schemes</hi>


            <table class="table table-sm">
                <thead class="thead-dark">
                    <tr>

                        <th scope="col">Subject</th>
                        <th scope="col">Assigenment</th>
                        <th scope="col">Date of deadline</th>
                        <th scope="col">Marking points</th>
                        <th scope="col">Marks</th>



                    </tr>
                </thead>
                <tbody>
                    {
                        
                            <tr>


                                <th>{marking.subject}</th>
                                <td>{marking.assignment}</td>
                                <td>{marking.date}</td>
                                <td>
                                    <tr>
                                        <td>{marking.point}</td>
                                        <td>{marking.marks}</td>
                                    </tr>
                                    <tr>
                                        <td>{marking.point1}</td>
                                        <td>{marking.marks1}</td>
                                    </tr>
                                    <tr>
                                        <td>{marking.point2}</td>
                                        <td>{marking.marks2}</td>
                                    </tr>
                                    <tr>
                                        <td>{marking.point3}</td>
                                        <td>{marking.marks3}</td>
                                    </tr>
                                </td>
                            </tr>


                    
                    }
                </tbody>
            </table>



            <br></br>








        </div>



    )
}