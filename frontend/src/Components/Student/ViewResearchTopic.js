import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';

function ViewResearchTopic() {

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
        console.log(gid)
        axios.get(`http://localhost:5000/api/rtopics/${selects}`)
            .then(res => {
                console.log(res.data)
                setListTopics(res.data)
            }).catch(err => console.error(err))
    }



    return (
        <div>
           <div className='container shadow my-5'>
            <h3 className=" fw-bolder mb-4"><center>Supervisor Status</center></h3>
                <div class="input-group">
                    <div class="form-inline my-2 my-lg-0">
                        <h5 className='search-topic'>Select your Group ID</h5>
                        <Button className='btn btn-primary search-btn' onClick={() => { SearchItem({ selects }) }}>Search</Button>
                        <select className='form-control select-btn w-50' name="gid" id="gid" placeholder='Search your Group ID' value={selects} onChange={e => setSelects(e.target.value)}>
                            <option>None</option>
                            <option>G001</option>
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
                            <th scope="col">Group Leader's IT Number</th>
                            <th scope="col">Topic Name</th>
                            <th scope="col">Category</th>
                            <th scope='col'>Status</th>
                            <th scope="col">Delete</th> 
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
                                    <td><button className='btn btn-warning'>{topic.status_sup}</button></td>
                                    <td ><button className='btn btn-danger' onClick={() => deleteResearch_Topic(topic._id)}>Delete</button></td> 
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

export default ViewResearchTopic