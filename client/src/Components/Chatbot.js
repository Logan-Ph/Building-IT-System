import React, { useState, useEffect, useRef } from 'react';
export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const messageBoxRef = useRef();

  const send = () => {
    if (inputMessage !== '') {
      addMsg(inputMessage);
      setInputMessage('');
      setTimeout(() => addResponseMsg(inputMessage), 1000);
    }
  };

  const addMsg = (msg) => {
    setMessages((prevMessages) => [...prevMessages, { text: msg, sent: true }]);
  };

  const addResponseMsg = (msg) => {
    setMessages((prevMessages) => [...prevMessages, { text: msg, sent: false }]);
  };

  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }

    if (isCollapsed) {
      const timer = setTimeout(() => setShowImage(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShowImage(false);
    }
  }, [messages, isCollapsed]);

  return (
    <section>
      <div id="chatbot" className={`main-card ${isCollapsed ? 'collapsed' : ''}`}>
        <button id="chatbot_toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
          <div>
            {showImage && <img alt="" src={require("../Components/images/rBuddy.png")} />}
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
          </div>
          {!isCollapsed && <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              style={{ color: "#000054" }}
            />
          </svg>}
        </button>
        <div className="main-title">
          <div>
            <img alt="" src={require("../Components/images/rBuddy.png")} />
          </div>
          <span>rBuddy</span>
        </div>
        <div className="chat-area" id="message-box" ref={messageBoxRef}>
          {messages.map((message, index) => (
            <div key={index} className={`chat-message-div ${message.sent ? 'chat-message-sent' : 'chat-message-received'}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="line"></div>
        <div className="input-div">
          <input
            className="input-message"
            name="message"
            type="text"
            id="message"
            placeholder="Type your message ..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                send();
              }
            }}
          />
          <button className="input-send" onClick={send}>
            <svg style={{ width: "24px", height: "24px" }}>
              <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}