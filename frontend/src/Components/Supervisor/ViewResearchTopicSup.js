import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'

function ViewResearchTopicSup() {

    const [listTopic, setListTopics] = useState([]);

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

    const deleteResearch_Topic = async(id) => {
        try {
          const res = await axios.delete(`http://localhost:5000/api/rtopics/${id}`)
          const newListItems = listTopic.filter(topic => topic._id !==  id);
          setListTopics(newListItems);
    
        } catch(err) {
          console.log(err);
        }
      }

      const updateResearch_Topic = async (e) => {
        e.preventDefault()
        try {
          const res = await axios.put(`http://localhost:5000/api/rtopics${isUpdating}`, {item: updateItemText})
          console.log(res.data);
          const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
          const updatedItem = listItems[updatedItemIndex].item = updateItemText;
          setUpdateItemText('');
          setIsUpdating('');
        } catch(err) {
          console.log(err);
        }
      }
  
    return (
        <div>
            <div className='div1'>
                <table>
                    <thead>
                        <tr key={"1"}>
                            <th>Group ID</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Research Topic</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Category </th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Status</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Accept / Reject</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            listTopic.map((topic, id) => (
                                <tr key={id}>
                                    <td >{topic.gid}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <td >{topic.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <td >{topic.interest}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <td> {topic.status_sup}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <td> <NavLink to='/supstatus'><button className='btn btn-success'> Accept / Reject</button></NavLink></td>
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