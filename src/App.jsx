
import React, { useState } from 'react';

import Header from './components/Header';
import ChatContainer from './components/ChatContainer';
import InputBar from './components/InputBar';
import { fetchGeminiResponse } from './components/gemini';

const initialMessages = [
  { text: 'Welcome to Bible Chat! How can I help you today?', sender: 'bot' },
  { text: 'Can you share a verse about peace?', sender: 'user' },
  { text: 'Certainly! “Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.” — John 14:27', sender: 'bot' },
];

function App() {
  const [messages, setMessages] = useState(initialMessages);


  const handleSend = async (msg) => {
    setMessages([...messages, { text: msg, sender: 'user' }]);
    setMessages(msgs => [...msgs, { text: 'BibleBot is thinking...', sender: 'bot' }]);
    try {
      const response = await fetchGeminiResponse(msg);
      setMessages(msgs => [
        ...msgs.slice(0, -1),
        { text: response, sender: 'bot' }
      ]);
    } catch (err) {
      setMessages(msgs => [
        ...msgs.slice(0, -1),
        { text: 'Sorry, there was an error connecting to BibleBot.', sender: 'bot' }
      ]);
    }
  };

  return (
    <div style={{ minHeight: '100vh', width: '100vw', position: 'relative', overflow: 'hidden' }}>
      <Header />
      <ChatContainer messages={messages} />
      <InputBar onSend={handleSend} />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;
