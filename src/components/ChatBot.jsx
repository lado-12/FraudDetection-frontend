import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    // Initial greeting from the bot
    simulateBotResponse("Hello! How can I assist you today?");
  }, []);

  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (userMessage.trim() !== '') {
      // User's message
      const newUserMessage = { text: userMessage, sender: 'user' };
      setMessages([...messages, newUserMessage]);

      // Get bot response from OpenAI Chat API
      try {
        const botResponse = await getChatbotResponse(userMessage);
        setMessages([...messages, { text: `Bot: ${botResponse}`, sender: 'bot' }]);
      } catch (error) {
        console.error('Error fetching bot response:', error);
        setMessages([...messages, { text: 'Bot: Oops! Something went wrong.', sender: 'bot' }]);
      }

      setUserMessage('');
    }
  };

  const getChatbotResponse = async (userMessage) => {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: messages.map((msg) => ({ role: msg.sender, content: msg.text })),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
      }
    );

    return response.data.choices[0].message.content;
  };

  const simulateBotResponse = (message) => {
    setMessages([...messages, { text: `Bot: ${message}`, sender: 'bot' }]);
  };

  return (
    <div>
      <div style={{ border: '1px solid #ccc', height: '300px', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ padding: '8px', textAlign: message.sender === 'user' ? 'right' : 'left' }}>
            {message.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <input type="text" value={userMessage} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
