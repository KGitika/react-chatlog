import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({entries, onLikeToggle }) =>{
  const ChatEntries = entries.map( (entry) => {
    return(
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked = {entry.liked}
        onLikeToggle = {onLikeToggle}
      ></ChatEntry>
    );
  });
  return (
    <div className="chat-log">
      {ChatEntries}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatLog