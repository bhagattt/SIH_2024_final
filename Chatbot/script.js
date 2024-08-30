const chatinput = document.querySelector(".chat-input textarea");
const sendChatbtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotoggler = document.querySelector(".chatbot-toggler");

let usermessage;

const createChatLi = (message, classname) => {
    const chatli = document.createElement("li");
    chatli.classList.add("chat", classname);
    let chatcontent = classname === "outgoing" 
        ? `<p>${message}</p>` 
        : `<img src="images/bot.jpg" alt=""><p>${message}</p>`;
    chatli.innerHTML = chatcontent;
    return chatli;
};

const generateResponse = () => {
    const API_URL = "http://localhost:3000/generate-content";

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt: usermessage,
        })
    };

    fetch(API_URL, requestOptions)
        .then(response => response.json())
        .then(data => {
            const botMessage = data.generatedText || "Sorry, I didn't understand that.";
            const thinkingMessageElement = chatbox.querySelector(".chat.incoming");
            if (thinkingMessageElement) {
                thinkingMessageElement.remove();
            }
            chatbox.appendChild(createChatLi(botMessage, "incoming"));
        })
        .catch(error => {
            console.error('Error:', error);
            const thinkingMessageElement = chatbox.querySelector(".chat.incoming");
            if (thinkingMessageElement) {
                thinkingMessageElement.remove();
            }
            chatbox.appendChild(createChatLi("Error: Unable to get a response from the server.", "incoming"));
        });
};

const handleChat = () => {
    usermessage = chatinput.value.trim();
    if (!usermessage) return;

    chatbox.appendChild(createChatLi(usermessage, "outgoing"));
    chatinput.value = "";

    const thinkingMessageElement = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(thinkingMessageElement);

    generateResponse();
};

chatbotoggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
sendChatbtn.addEventListener("click", handleChat);
