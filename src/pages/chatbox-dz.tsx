const ChatBox = () => {
  return (
    <div className="chat-container">
      <ul className="messages"></ul>
      <input
        className="user-input"
        type="text"
        placeholder="Ostavite poruku..."
      />
      <button className="send-btn">Pošalji</button>
    </div>
  );
};

export default ChatBox;
