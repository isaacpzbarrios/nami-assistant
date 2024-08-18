import "../../styles/history-msg.css";
import ChatBubble from "./chat-bubble";

function HistoryMsg() {
  return (
    <div className="chat-container">
      <div className="chat-content">
        <ChatBubble text="Hello, how can I assist you today?" isBot />
        <ChatBubble text="I need some information about your services." />
        <ChatBubble text="I need some information about your services." />
        <ChatBubble text="Hello, how can I assist you today?" isBot />
        <ChatBubble text="I need some information about your services." />
      </div>
    </div>
  );
}

export default HistoryMsg;
