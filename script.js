document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            addMessage("You", userMessage, "user");
            userInput.value = "";
            processUserMessage(userMessage);
        }
    }

    function addMessage(sender, message, messageType) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", messageType);
        messageDiv.textContent = `${sender}: ${message}`;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function processUserMessage(userMessage) {
        if (userMessage.toLowerCase() === "exit") {
            addMessage("Chatbot", "Goodbye!", "bot");
            userInput.disabled = true;
            sendButton.disabled = true;
        } else {
            addMessage("You", userMessage, "user");
            const botResponse = simpleChatbot(userMessage);
            addMessage("Chatbot", botResponse, "bot");
        }
    }

    function simpleChatbot(userMessage) {
        // Pattern matching to identify greetings and questions
        if (/hello|hi|hey/i.test(userMessage)) {
            return "Hello! How can I assist you?";
        } else if (/how are you|how's it going/i.test(userMessage)) {
            return "I'm just a chatbot, but I'm here to help you!";
        } else if (/bye|goodbye/i.test(userMessage)) {
            return "Goodbye! Have a great day!";
        } else {
            return "I'm sorry, I don't understand. Can you please rephrase?";
        }
    }
});
