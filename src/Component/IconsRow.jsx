// IconsRow.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faExclamationCircle,
  faReply,
  faShare,
  faFolderPlus
} from '@fortawesome/free-solid-svg-icons';
import './Styles/iconRow.css'

const IconsRow = () => {
  return (
    <div className="icons-row">
      <FontAwesomeIcon icon={faTrashAlt} className="icon" />
      <FontAwesomeIcon icon={faExclamationCircle} className="icon" />
      <FontAwesomeIcon icon={faReply} className="icon" />
      <FontAwesomeIcon icon={faShare} className="icon" />
      <FontAwesomeIcon icon={faFolderPlus} className="icon" />
    </div>
  );
};

export default IconsRow;
