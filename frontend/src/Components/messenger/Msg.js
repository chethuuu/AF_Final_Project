import React from 'react';
import {format} from 'timeago.js';
import './messenger.css';

export default function msg({message, own}) {
  return (
    <div className={own ? "msg own" : "msg"}>
      <div className='msgTop'>
        <img className='msgImg' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' alt='' />
        <p className='msgText'>
            {message.text}
        </p>
      </div>
      <div className='msgBottom'>{format(message.createdAt)}</div>
      {/* <div className='msgBottom'>(message.createdAt)</div> */}
    </div>
  )
}
