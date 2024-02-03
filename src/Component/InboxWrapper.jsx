// InboxHeader.jsx
import React, { useState } from 'react';
import './Styles/InboxHeader.css'; // Import the corresponding CSS file

const InboxHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="inbox-header">
      <div className='heading'>
        <div className='InboxDiv'>
      <h2>Inbox</h2>
      </div>
      <div className='pDiv'>
      <p>Messages: 2 {/* The count of rendered message components goes here */}</p></div>
      </div>
      <div className="dropdown" onClick={toggleDropdown}>
        <span>...</span>
        {showDropdown && (
          <div className="dropdown-menu">
            <div className='subHead'><p id='specialHeading'>All messages in this folder</p></div>
            <p>Select all messages</p>
            <p>Mark all messages as read</p>
            <p>Move all messages</p>
            <p>Archive old messages</p>
            <p>Delete all messages</p>
            <hr/>
            <div className="sub-heading">Sort by:</div>
            <label>
              <input type="radio" name="sort" value="date" /> Date
            </label>
            <label>
              <input type="radio" name="sort" value="from" /> From
            </label>
            <label>
              <input type="radio" name="sort" value="unread" /> Unread
            </label>
            <label>
              <input type="radio" name="sort" value="size" /> Size
            </label>
            <label>
              <input type="radio" name="sort" value="subject" /> Subject
            </label>
            <label>
              <input type="radio" name="sort" value="color" /> Color
            </label>
            <hr/>
            <div className="sub-heading">Sort Order:</div>
            <label>
              <input type="radio" name="order" value="ascending" /> Ascending
            </label>
            <label>
              <input type="radio" name="order" value="descending" /> Descending
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default InboxHeader;
