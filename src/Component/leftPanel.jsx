import React from 'react';
import './Styles/leftPanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faShareFromSquare} from '@fortawesome/free-solid-svg-icons'

const YourComponent = () => {
  return (
    <div className="main-container">
      <div className="hamburger-menu">
      <FontAwesomeIcon icon={faBars} size='2x' />
      </div>
      <div className="center-container">
        <button className="center-button">Emails</button>
      </div>
      <div className="bottom-center-container">
        <button className="bottom-center-button">New Message <span><FontAwesomeIcon icon={faShareFromSquare} /></span></button>
      </div>
    </div>
  );
};

export default YourComponent;
