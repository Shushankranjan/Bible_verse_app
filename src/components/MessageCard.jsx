import React from 'react';

const MessageCard = ({ message, sender }) => {
  const isUser = sender === 'user';
  return (
    <div
      className={`message-card ${isUser ? 'user' : 'bot'}`}
      style={{
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        background: isUser
          ? '#f4f4f7'
          : 'linear-gradient(135deg, #e3f0ff 0%, #d2e6fa 100%)',
        color: isUser ? '#444' : '#2a4d7a',
        borderRadius: '1.2rem',
        padding: '0.85rem 1.2rem',
        margin: '0.5rem 0',
        maxWidth: '80%',
        boxShadow: isUser
          ? '0 2px 8px rgba(180,180,180,0.07)'
          : '0 2px 12px rgba(120,160,220,0.08)',
        opacity: 0,
        animation: 'fadeIn 0.7s forwards',
      }}
    >
      {message}
    </div>
  );
};

export default MessageCard;
