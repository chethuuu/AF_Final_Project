import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios'
import { Button } from 'react-bootstrap'

function ViewResearchTopicSup() {

    const [listTopic, setListTopics] = useState([]);
    const [selects, setSelects] = useState();

    useEffect(() => {
        const getListTopics = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/rtopics")
                setListTopics(res.data);
                console.log('render');
            } catch (err) {
                console.log(err);
            }
        }
        getListTopics()
    }, []);

    const deleteResearch_Topic = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/rtopicss/${id}`)
            const newListItems = listTopic.filter(topic => topic._id !== id);
            setListTopics(newListItems);

        } catch (err) {
            console.log(err);
        }
    }

    function SearchItem() {
        console.log(interest)
        axios.get(`http://localhost:5000/api/rtopics/interest/filter/${selects}`)
            .then(res => {
                console.log(res.data)
                setListTopics(res.data)
            }).catch(err => console.error(err))
    }



    return (
        <div>
            <div className='container shadow my-5'>
                <div class="input-group">
                    <div class="form-inline my-2 my-lg-0">
                        <h5 className='search-topic'>Select your Group ID</h5>
                        <Button className='btn btn-primary search-btn' onClick={() => { SearchItem({ selects }) }}>Search</Button>
                        <select className='form-control select-btn w-50' name="interest" id="interest" placeholder='Search your Group ID' value={selects} onChange={e => setSelects(e.target.value)}>
                            <option>None</option>
                            <option>Internet of Things</option>
                            <option>G002</option>
                            <option>G003</option>
                            <option>G004</option>
                            <option>G005</option>
                        </select>
                    </div> <br />
                </div>

                <table class="table">
                    <thead className='table-dark'>
                        <tr>
                            <th scope='col'>No</th>
                            <th scope="col">Group ID</th>
                            <th scope="col">Leader's IT Number</th>
                            <th scope="col">Topic Name</th>
                            <th scope="col">Category</th>
                            <th scope='col'>Supervisor Status</th>
                            <th scope='col'>Accept / Reject</th>
                            <th scope='col'>Send E-mail</th>
                            {/* <th scope="col">Update</th> 
                            <th scope="col">Delete</th>*/}
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            listTopic.map((topic, id) => (
                                <tr>
                                    <td>{id + 1}</td>
                                    <td>{topic.gid}</td>
                                    <td>{topic.lead_no}</td>
                                    <td>{topic.name}</td>
                                    <td>{topic.interest}</td>
                                    <td><button className='btn btn-warning mx-auto'>{topic.status_sup}</button></td>
                                    <td><Link to={`/updatereqsup/${topic._id}`}><button className='btn btn-danger'>Accept / Reject</button></Link> </td>
                                    <td><Link to={`/sendmail/${topic._id}`}><button className='btn btn-success'>Send Status to Group Leader</button></Link></td>
                                    {/* <td><Link to={`/updatereqq/${topic._id}`}><Button className='btn btn-danger'>Update</Button></Link> </td> 
                                    <td><button className='btn btn-danger' onClick={() => deleteResearch_Topic(topic._id)}>Delete</button></td>*/}
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


export default ViewResearchTopicSup