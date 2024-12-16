// src/App.js

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../../src/App.css';

// Set up the socket connection
// const socket = io();
function App() {
  const socket = io('ws://localhost:2000');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // When the component mounts, listen for incoming messages
  useEffect(() => {
    socket.on('send name', (username) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'name', content: username },
      ]);
    });



    socket.on('send message', (chat) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'message', content: chat },
      ]);
    });

    return () => {
      socket.off('send name');
      socket.off('send message');
    };
  }, []);


  // useEffect(() => {
  //   socket.on('message', (data) => setMessages([...messages, data]));
  // }, [socket, messages]);


  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on('message', (data) => {
      console.log('Received server message:', data);  // This is the 'Welcome' message
    });

    socket.on('chat message', (msg) => {
      console.log('Received chat message:', msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup the event listeners when the component unmounts
    return () => {
      socket.off('message');
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Emit a chat message to the server
      socket.emit('chat message', newMessage);
      setNewMessage('');  // Clear the input field after sending
    }
  };


  console.log(messages, 'messages');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim()) {
      socket.emit('send name', username);
      socket.emit('send message', message);
      setMessage('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-green-500 text-3xl text-center mt-5">GeeksforGeeks</h1>
      <h2 className="font-semibold text-xl text-center mt-5" id="logo">
        Chat App using Socket io
      </h2>

      <form onSubmit={sendMessage} className="flex flex-col justify-center items-center mt-5">
      
        <input
          className="border border-gray-400 rounded-md mt-5 p-1"
          type="text"
          placeholder="Message"
          value={newMessage}
          // onChange={(e) => setMessage(e.target.value)}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="bg-blue-500 rounded-md p-2 text-white mt-5" >Send</button>
      </form>

      <div className="flex flex-col justify-center items-center mt-5" id="messageArea">
        {messages.map((msg, index) => (
          <p
            key={index}
            style={{
              backgroundColor: msg.type === 'name' ? 'grey' : 'transparent',
              color: msg.type === 'name' ? 'white' : 'black',
              width: '100%',
              textAlign: 'center',
              padding: '5px',
            }}
          >
            {msg.type === 'name' ? `${msg.content}:` : msg.content}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
