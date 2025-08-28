import React, { useRef, useEffect } from 'react';
import MessageCard from './MessageCard';

const ChatContainer = ({ messages }) => {
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <main
      style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        minHeight: '60vh',
        background: 'rgba(255,255,255,0.85)',
        borderRadius: '1.5rem',
        boxShadow: '0 4px 32px rgba(220,210,180,0.08)',
        padding: '2rem 1.2rem 6rem 1.2rem',
        overflowY: 'auto',
        position: 'relative',
      }}
      ref={chatRef}
    >
      {messages.map((msg, idx) => (
        <MessageCard key={idx} message={msg.text} sender={msg.sender} />
      ))}
    </main>
  );
};

export default ChatContainer;
