import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
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

    //   const updateResearch_Topic = async (e) => {
    //     e.preventDefault()
    //     try {
    //       const res = await axios.put(`http://localhost:5000/api/rtopics${isUpdating}`, {item: updateItemText})
    //       console.log(res.data);
    //       const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
    //       const updatedItem = listItems[updatedItemIndex].item = updateItemText;
    //       setUpdateItemText('');
    //       setIsUpdating('');
    //     } catch(err) {
    //       console.log(err);
    //     }
    //   }

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

                <div class="input-group">
                    <div class="form-inline my-2 my-lg-0">
                        <h5 className='grpid'>Select your Group ID</h5>
                        <Button className='btn btn-primary search' onClick={() => { SearchItem({ selects }) }}>Search</Button>
                        <select className='form-control select-gid' name="gid" id="gid" placeholder='Search your Group ID' value={selects} onChange={e => setSelects(e.target.value)}>
                            <option>None</option>
                            <option>G001</option>
                            <option>G008</option>
                        </select>
                    </div> <br />
                </div>

                <table class="table">
                    <thead className='table-dark'>
                        <tr>
                            <th scope='col'>No</th>
                            <th scope="col">Group ID</th>
                            <th scope="col">Topic Name</th>
                            <th scope="col">Category</th>
                            <th scope='col'>Status</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            listTopic.map((topic, id) => (
                                <tr>
                                    <td>{id + 1}</td>
                                    <td >{topic.gid}</td>
                                    <td >{topic.name}</td>
                                    <td >{topic.interest}</td>
                                    <td >{topic.status_sup}</td>
                                    {/* <td ><button className='btn btn-warning' onClick={() => updateResearch_Topic(topic._id, topic.name)}>Update</button></td>  */}
                                    <td ><button className='btn btn-danger' onClick={() => deleteResearch_Topic(topic._id)}>Delete</button></td>

                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>

                        <button onClick={this.createAndDownloadPDF}>Download PDF </button>

            </div>
        </div>
    )
}

export default ViewResearchTopic