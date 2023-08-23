# ChatBot
AI Chatbot with Rule-Based Responses
Welcome to the AI Chatbot with Rule-Based Responses repository! This project is designed to demonstrate a simple chatbot that responds to user inputs based on predefined rules. By utilizing if-else statements and pattern matching techniques, the chatbot can effectively identify user queries and provide appropriate responses. This project serves as a valuable introduction to natural language processing (NLP) and conversation flow, implemented using HTML, CSS, and JavaScript.


## -> This will work on some conditions.
## function simpleChatbot(userMessage) {
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
![chatbotss](https://github.com/Palla007/ChatBot/assets/104196811/d79ac7eb-f99b-425e-9e20-1d17e6524928)
