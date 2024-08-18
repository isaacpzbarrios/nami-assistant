import "../../styles/chat-input.css";

function ChatInput() {
  return (
    <>
      <div className="wrapper">
        <div className="typing-area">
          <div className="input-field">
            <input type="text" placeholder="Envía un mensaje a Nami" required />
            <button className="send-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-send-2"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5" 
                stroke="none"
                fill="none"
                strokeLinecap="round" 
                strokeLinejoin="round" 
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
                <path d="M6.5 12h14.5" />
              </svg>
            </button>

            <button className="microphone-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-microphone"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
                <path d="M5 10a7 7 0 0 0 14 0" />
                <path d="M8 21l8 0" />
                <path d="M12 17l0 4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatInput;
