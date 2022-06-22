import { IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import React, { useState } from 'react';
import './Chat.css';

function Chat() {

  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    setInput('');
  }

  return (
    <div className="chat">
      <div className="chat-header">
        <h3>
          To: <span className="chat-name">Channel name</span>
        </h3>
        <strong>Details</strong>
      </div>

      <div className="chat-message">
        <h2>chat message</h2>
        <h2>chat message</h2>
        <h2>chat message</h2>
        <h2>chat message</h2>
      </div>

      <div className="chat-input">
        <form>
          <input
            value={input}
            onChange={(e) => e.target.value}
            placeholder="iMessage"
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>

        <IconButton>
          <MicIcon className="chat-mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;