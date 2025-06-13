import './App.css';
import DATA from './data/messages.json';
import ChatEntry from './components/ChatEntry';



const App = () => {
  const firstMessagesData = DATA[0];
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <div>
          <ChatEntry 
            sender={firstMessagesData.sender}
            body={firstMessagesData.body}
            timeStamp={firstMessagesData.timeStamp}
          ></ChatEntry>
        </div>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
