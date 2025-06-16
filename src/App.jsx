import './App.css';
import DATA from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';



const App = () => {
  const MessagesData = DATA;
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <div>
          {/* <ChatEntry 
            sender={firstMessagesData.sender}
            body={firstMessagesData.body}
            timeStamp={firstMessagesData.timeStamp}
          ></ChatEntry> */}
          <ChatLog entries = {MessagesData}></ChatLog>
        </div>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
