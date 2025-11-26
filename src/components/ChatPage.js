import React, { useState } from "react";
import "./ChatPage.css";
import chatBg from "../assets/chat-bg.png"; // your downloaded image

export default function ChatPage() {
  const contacts = [
    { id: 1, name: "Rini", lastMsg: "👀🥱", time: "2:14 AM" },
    { id: 2, name: "Sara", lastMsg: "Hey, on the wayyy", time: "12:06 PM" },
    { id: 3, name: "Manasi", lastMsg: "👻😴nightZzz..", time: "10:55 PM" },
  ];

  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState({});

  const openChat = (id) => {
    setActiveChat(id);
    if (!chatHistory[id]) {
      setChatHistory((prev) => ({ ...prev, [id]: [] }));
    }
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    setChatHistory((prev) => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), { from: "me", text: message }],
    }));

    setMessage("");
  };

  return (
    <div className={`chat-container ${activeChat ? "active-chat" : ""}`}>
      {/* LEFT CONTACT LIST */}
      <div className="contact-list">
        <h2>Chats</h2>
        {contacts.map((c) => (
          <div
            key={c.id}
            onClick={() => openChat(c.id)}
            className={`contact-item ${activeChat === c.id ? "active" : ""}`}
          >
            <div className="name">{c.name}</div>
            <div className="last-msg">{c.lastMsg}</div>
            <div className="time">{c.time}</div>
          </div>
        ))}
      </div>

      {/* RIGHT CHAT WINDOW */}
      <div className="chat-window">
        {activeChat ? (
          <>
            <div className="chat-header">
             {/* Back button for mobile */}
             <span className="back-btn" onClick={() => setActiveChat(null)}>←</span>
             {contacts.find((c) => c.id === activeChat)?.name}
            </div>


            <div
              className="chat-messages"
              style={{
                backgroundImage: `url(${chatBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {(chatHistory[activeChat] || []).map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.from === "me" ? "me" : "other"}`}
                >
                  <div className="bubble">{msg.text}</div>
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}>➤</button>
            </div>
          </>
        ) : (
          <div className="no-chat">Select a chat to start messaging</div>
        )}
      </div>
    </div>
  );
}
