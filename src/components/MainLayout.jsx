// src/components/MainLayout.jsx
import React from 'react';
import HelpButton from './HelpButton';

const MainLayout = ({ children }) => {
  return (
    <>
      {children}
      <HelpButton />
    </>
  );
};

export default MainLayout;