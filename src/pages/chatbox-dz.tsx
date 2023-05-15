const messagesList = document.getElementsByClassName("messages");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementsByClassName("send-btn");

sendButton.addEventListener("click", sendMessage);
  
function sendMessage() {
    const messageText = userInput.value;

    if (messageText.trim() !== "") {
        // Display user message
        displayMessage(messageText, "korisnik");
    
     const response = generateResponse(messageText);

     displayMessage(response, "bot");
     
     userInput.value = "";
    }
  }

  function displayMessage(message, sender) {
    const li = document.createElement("li");
    li.textContent = `${sender}: ${message}`;
    messagesList.appendChild(li);
  }

  function generateBotResponse(userMessage) {
    return "This is a bot response.";
  }

const ChatBox = () => {
    return (
        <div className="chat-container">
  <ul className="messages"></ul>
  <input id="user-input" type="text" placeholder="Ostavite poruku..." />
  <button className="send-btn">Pošalji</button>
</div>

    )
};

export default ChatBox;