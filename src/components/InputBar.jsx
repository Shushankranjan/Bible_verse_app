import React, { useState } from 'react';

const InputBar = ({ onSend }) => {
  const [value, setValue] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSend(value);
      setValue('');
    }
  };

  return (
    <form
      onSubmit={handleSend}
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: 'transparent',
        zIndex: 10,
        padding: '0.8rem 0',
      }}
    >
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type your message..."
        style={{
          width: '100%',
          maxWidth: 600,
          padding: '1rem 1.2rem',
          borderRadius: '2rem',
          border: '2px solid #e3e6f7',
          outline: 'none',
          fontSize: '1.1rem',
          fontFamily: 'inherit',
          boxShadow: '0 2px 12px rgba(180,180,180,0.07)',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
        onFocus={e => e.target.style.boxShadow = '0 0 0 3px #b3d1ff'}
        onBlur={e => e.target.style.boxShadow = '0 2px 12px rgba(180,180,180,0.07)'}
      />
    </form>
  );
};

export default InputBar;
