// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Chatbot Functionality
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const sendMessage = document.getElementById('send-message');
const chatMessages = document.getElementById('chat-messages');

// Knowledge base for the chatbot
const knowledgeBase = {
    lecture: {
        keywords: ['lecture', 'notes', 'slides', 'class', 'course'],
        response: 'Here are the available lecture materials:\n- Week 1: Introduction\n- Week 2: Core Concepts\n- Week 3: Advanced Topics\n\nYou can find them in the Teaching Materials section.'
    },
    project: {
        keywords: ['project', 'research', 'work'],
        response: 'Here are my current projects:\n- Research Project 1\n- Teaching Resource 1\n- Personal Project 1\n\nYou can find more details in the Projects section.'
    },
    office: {
        keywords: ['office', 'hours', 'meet', 'appointment', 'schedule'],
        response: 'My office hours are:\nMonday: 2-4 PM\nWednesday: 10-12 PM\nFriday: 1-3 PM\n\nYou can schedule a meeting through this link: [Your Office Hours Link]'
    }
};

// Toggle chat window
chatToggle.addEventListener('click', () => {
    chatWindow.classList.add('active');
    chatToggle.style.display = 'none';
});

closeChat.addEventListener('click', () => {
    chatWindow.classList.remove('active');
    chatToggle.style.display = 'block';
});

// Handle message sending
function sendUserMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        chatInput.value = '';
        processMessage(message);
    }
}

sendMessage.addEventListener('click', sendUserMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendUserMessage();
    }
});

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function processMessage(message) {
    const lowerMessage = message.toLowerCase();
    let response = "I'm not sure about that. You can ask me about:\n- Lecture materials\n- Projects\n- Office hours";

    // Check each category in the knowledge base
    for (const category in knowledgeBase) {
        if (knowledgeBase[category].keywords.some(keyword => lowerMessage.includes(keyword))) {
            response = knowledgeBase[category].response;
            break;
        }
    }

    // Add a small delay to make it feel more natural
    setTimeout(() => {
        addMessage(response, 'bot');
    }, 500);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 