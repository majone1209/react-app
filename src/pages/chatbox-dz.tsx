const ChatBox = () => {
  return (
    <div>
      <div className="chatbox__wrapper">
        <ul className="messages"></ul>
        <input
          className="user__input"
          type="text"
          placeholder="Ostavite poruku..."
        />
        <button className="send-btn">Pošalji</button>
      </div>
    </div>
  );
};

export default ChatBox;
