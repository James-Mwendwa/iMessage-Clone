import React from 'react';
import './IMessage.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function iMessage() {
  return (
    <div className='iMessage'>
      <Sidebar />
      <Chat />
    </div>
  )
}

export default iMessage;