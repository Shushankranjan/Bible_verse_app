import React from 'react';

const CrossIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Cross">
    <rect x="12" y="4" width="4" height="20" rx="2" fill="#6C7A89" />
    <rect x="4" y="12" width="20" height="4" rx="2" fill="#6C7A89" />
  </svg>
);

const Header = () => (
  <header style={{
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
    padding: '2rem 0 1.5rem 0',
    background: 'transparent',
    fontWeight: 600,
    fontSize: '2rem',
    letterSpacing: '0.02em',
    color: '#3a3a3a',
  }}>
    <CrossIcon />
    <span>Bible Chat</span>
  </header>
);

export default Header;
