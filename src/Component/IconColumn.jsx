import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faEnvelopeOpen, faTrash, faEdit, faShare } from '@fortawesome/free-solid-svg-icons';
import './Styles/IconColumn.css'

const IconColumn = () => {
  return (
    <div className="icon-column">
      <FontAwesomeIcon icon={faInbox} className="icon" />
      <FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />
      <FontAwesomeIcon icon={faTrash} className="icon" />
      <FontAwesomeIcon icon={faEdit} className="icon" />
      <FontAwesomeIcon icon={faShare} className="icon" />
    </div>
  );
};

export default IconColumn;
