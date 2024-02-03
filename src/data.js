// src/View.jsx
import React from 'react';
import LeftPanel from './components/LeftPanel';
import IconColumn from './components/IconColumn';
import MessageComponent from './components/Message';

const View = () => {
  // Dummy data for testing
  const dummyData = [
    // ... (dummy data as provided in the previous response)
  ];

  return (
    <div>
      <LeftPanel />
      <IconColumn />
      {dummyData.map((data, index) => (
        <MessageComponent key={index} {...data} />
      ))}
    </div>
  );
};

export default View;
