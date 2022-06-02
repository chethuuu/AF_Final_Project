import React, { useEffect, useState } from 'react'
import axios from 'axios'

function PMResearchTopicStatus() {
    const [listTopic, setListTopics] = useState([]);

    useEffect(() => {
        const getListTopics = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/rtopics/request/approve")
                setListTopics(res.data);
                console.log('render');
            } catch (err) {
                console.log(err);
            }
        }
        getListTopics()
    }, []);

    return (
        <div>
            <div className='container shadow my-5'>
                <table class="table">
                    <thead className='table-dark'>
                        <tr>
                            <th scope='col'>No</th>
                            <th scope="col">Group ID</th>
                            <th scope="col">Topic Name</th>
                            <th scope="col">Category</th>
                            <th scope='col'>Supervisor Status</th>
                            <th scope='col'>Co-Supervisor Status</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            listTopic.map((topic, id) => (
                                <tr>
                                    <td>{id + 1}</td>
                                    <td>{topic.gid}</td>
                                    <td>{topic.name}</td>
                                    <td>{topic.interest}</td>
                                    <td><button className='btn btn-danger mx-auto'>{topic.status_sup}</button></td>
                                    <td><button className='btn btn-danger mx-auto'>{topic.status_co}</button></td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default PMResearchTopicStatus