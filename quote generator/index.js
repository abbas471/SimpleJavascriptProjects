const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  }
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

newQuoteBtn.addEventListener("click", generateQuote);

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = randomQuote.text;
  quoteAuthor.textContent = "- " + randomQuote.author;
}

generateQuote();
