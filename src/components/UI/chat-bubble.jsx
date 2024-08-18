import '../../styles/chat-bubble.css';

function ChatBubble({ text, isBot }) {
  return (
    <div className={isBot ? 'chat-bubble-bot' : 'chat-bubble-user'}>
      {text}
    </div>
  );
}

export default ChatBubble;