import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './messenger.css';
import image from '../../img/Student.png';
import image1 from '../../img/Admin.png';
import image2 from '../../img/PanelMember.png';
import image3 from '../../img/CoSup.png';
import image4 from '../../img/Supervisor.png';

export default function Conversation({conversation, currentUserID}) {
  const [user, setUser] = useState(null);

  const url = 'http://localhost:5000/user/';

  useEffect(() => {
    const frindId = conversation.members.find(m => m !== currentUserID);

    const getUser = async () => {
      try{
        const res = await axios.get(url+'user/'+frindId);
        console.log(res);
        setUser(res.data);

      }catch(err){
        console.log(err)
      }
    }
    getUser();
  }, [])

  return (
    <div className='conversation'>
      <img className='conImg' src={user==null ? image : (user.role==='admin' ? image1 : (user.role==='user' ? image : (user.role==='CoSupervisor' ? image3 : (user.role==='Supervisor' ? image4 : image2))))} alt='user image' />
      <span className='conName'>{user==null ? "John" : user.name}</span>
    </div>
  )
}


//https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80
