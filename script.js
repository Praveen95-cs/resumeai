const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const responses = {
    "hi": "Hello! I'm Ashish Anto's resume chatbot. How can I help you?",
    "experience": "I have experience as an intern at Amazon managing employee databases and as an IT Specialist at TCS, working on web and Android application development.",
    "education": "I graduated with a BE in Computer Technology from MIT in January 2027, proficient in C, C++, and Java.",
    "skills": "I am skilled in complex coding, team leadership, client communication, and handling high-pressure situations.",
    "projects": "I have developed several projects including a music player and participated in coding competitions on LeetCode.",
    "contact": "You can contact me at 7845300364 or ashishanto79@gmail.com."
};

function appendMessage(text, sender) {
    const messageElement = document.createElement('p');
    messageElement.classList.add(sender);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.toLowerCase();
    appendMessage(userMessage, 'user');
    userInput.value = '';

    const botResponse = responses[userMessage] || "I'm sorry, I don't understand that.";
    appendMessage(botResponse, 'bot');
});