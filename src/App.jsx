import './App.css';
import DATA from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import './App.css';



const App = () => {
  const [messagesData, setMessagesData] = useState(DATA);
  const toggleLike = (Id) => {
    const updatedMessages = messagesData.map((msg) => {
      if (msg.id === Id) {
        return { ...msg, liked: !msg.liked };
      } else {
        return msg;
      }
    });
    setMessagesData(updatedMessages);
  };
  const likedMessages = messagesData.filter((message) => {
    return message.liked === true;
  });
  const totalLikes = likedMessages.length;
  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimer and Estragon</h1>
        <h2 id="heartWidget">{totalLikes} ❤️s</h2>
      </header>
      <main>
        <div>
          {
          /* Wave 01: Render one ChatEntry component
          <ChatEntry 
            sender={firstMessagesData.sender}
            body={firstMessagesData.body}
            timeStamp={firstMessagesData.timeStamp}
          ></ChatEntry> */}

          {/* {Wave 02: Render ChatLog component  */}
          <ChatLog entries = {messagesData} onLikeToggle={toggleLike}></ChatLog>
        </div>
      </main>
    </div>
  );
};

export default App;
