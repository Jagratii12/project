// App.js
import React,{useState} from 'react';
import YourComponent from './leftPanel';
import IconColumn from './IconColumn';
import MessageComponent from './message';
import './Styles/viewScreen.css'
import InboxWrapper from './InboxWrapper';
import IconsRow from './IconsRow';
import SelectedMessageContent from './SelectedMessage';


const ViewScreen = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const dummyData = [
    {
      starred: true,
      profileImage: 'https://placekitten.com/40/40',
      name: 'John Doe',
      dateTime: 'Monday',
      subject: 'Meeting Tomorrow',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      starred: false,
      profileImage: 'https://placekitten.com/40/41',
      name: 'Jane Doe',
      dateTime: 'Sunday',
      subject: 'Status Update',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    
  ];
  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div className="app-container">
      <YourComponent />
      <IconColumn />
      <div className="message-container">
        <InboxWrapper />
        {dummyData.map((data, index) => (
          <MessageComponent
            key={index}
            {...data}
            isSelected={selectedMessage === data}
            onMessageSelect={() => handleMessageSelect(data)}
          />
        ))}
      </div>
      <div  className="detail-view-container">
      <IconsRow />
      <SelectedMessageContent selectedMessage={selectedMessage} />
      </div>
    </div>
  );
};

export default ViewScreen;