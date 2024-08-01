import React, { useState } from 'react';

const ChatBox = () => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Handle sending message logic here
    console.log("Message sent: ", message);
    setMessage("");
  };

  return (
    <div className="chat-box">
      <input 
        type="text" 
        value={message} 
        onChange={handleInputChange} 
        placeholder="Type a new question..." 
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
