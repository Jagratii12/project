// MessageComponent.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import './Styles/Message.css'
const MessageComponent = ({ isSelected,onMessageSelect,starred, profileImage, name, dateTime, subject, body }) => {
  const [isStarred, setIsStarred] = useState(starred);

  const toggleStarred = () => {
    setIsStarred(!isStarred);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className={`main-body ${isSelected ? 'selected' : ''}`} onClick={() => onMessageSelect({ starred, profileImage, name, dateTime, subject, body })}>
      <div className="left-pane">
        <img src={profileImage} alt="profile" />
        <span onClick={toggleStarred}>
          {isStarred ? <FontAwesomeIcon icon={faRegularStar} /> : <FontAwesomeIcon icon={faSolidStar} />}
        </span>
      </div>
      <div className="right-pane">
        <div className="header">
          <div className="name-tag">{name}</div>
          <div className="date-time">{dateTime}</div>
        </div>
        <div className="body">
          <div className="subject">{truncateText(subject, 30)}</div>
          <div className="body-text">{truncateText(body, 100)}</div>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
