// Get the necessary DOM elements
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatBody = document.getElementById('chat-body');

// Event listener for the send button
sendButton.addEventListener('click', sendMessage);

// Function to send a message
function sendMessage() {
  const message = messageInput.value.trim();

  if (isValidMessage(message)) {
    addMessageToChat(message);
    clearMessageInput();
    scrollToBottom();
  }
}

// Function to validate a message
function isValidMessage(message) {
  if (message === '') {
    return false;
  }
  // Implement additional validation rules if needed
  return true;
}

// Function to add a message to the chat window
function addMessageToChat(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerText = message;

  chatBody.appendChild(messageElement);
}

// Function to clear the message input
function clearMessageInput() {
  messageInput.value = '';
}

// Function to scroll to the bottom of the chat window
function scrollToBottom() {
  chatBody.scrollTop = chatBody.scrollHeight;
}
