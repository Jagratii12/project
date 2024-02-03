
import React from 'react';
import './Styles/select.css'; 



const SelectedMessageContent = ({ selectedMessage }) => {
  if (!selectedMessage) {
    return (
        <div className='unselected-message-content'>
            <p>No Message Selected</p>
        </div>
    ); // Don't render anything if there's no selected message
  }

  const { profileImage, name, dateTime, subject, body } = selectedMessage;

  return (
    <div className="selected-message-content">
      <img src={profileImage} alt="profile" />
      <div className="header">
        <div className="name-tag">{name}</div>
        <div className="date-time">{dateTime}</div>
      </div>
      <div className="body">
        <div className="subject">{subject}</div>
        <div className="body-text">{body}</div>
      </div>
    </div>
  );
};

export default SelectedMessageContent;
