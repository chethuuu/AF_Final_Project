import React from 'react';
import './messenger.css';

export default function ChatOnline() {
  return (
    <div className='chatOnline'>
      <div className='onlineFriend'>
          <div className='onlineFrndImgContainer'>
            <img className='onlineFrndImg'
                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
                alt='' 
            />
            <div className='chatOnlineBadge'></div>
          </div>
          <span className='onlineFrindName'>John</span>
      </div>
    </div>
  )
}
