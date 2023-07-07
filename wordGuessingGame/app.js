// JavaScript code for the game logic
document.addEventListener("DOMContentLoaded", function() {
  // Array of words to be guessed
  var words = ["apple", "banana", "orange", "grape", "mango"];

  // Randomly select a word from the array
  var randomIndex = Math.floor(Math.random() * words.length);
  var selectedWord = words[randomIndex];

  // Array to store the guessed letters
  var guessedLetters = [];

  // Function to display the word with underscores for missing letters
  function displayWord() {
    var wordDisplay = "";
    for (var i = 0; i < selectedWord.length; i++) {
      if (guessedLetters.includes(selectedWord[i])) {
        wordDisplay += selectedWord[i] + " ";
      } else {
        wordDisplay += "_ ";
      }
    }
    document.getElementById("word-display").textContent = wordDisplay;
  }

  // Function to check if the guessed letter is correct
  function checkGuess(letter) {
    if (guessedLetters.includes(letter)) {
      return "You already guessed that letter!";
    } else {
      guessedLetters.push(letter);
      if (selectedWord.includes(letter)) {
        if (guessedLetters.length === selectedWord.length) {
          return "Congratulations! You guessed the word correctly!";
        } else {
          return "Correct guess! Keep going!";
        }
      } else {
        return "Wrong guess! Try again.";
      }
    }
  }

  // Event listener for the guess button
  document.getElementById("guess-button").addEventListener("click", function() {
    var letterInput = document.getElementById("letter-input").value;
    var message = checkGuess(letterInput);
    document.getElementById("message").textContent = message;
    displayWord();
  });

  // Initial word display
  displayWord();
});
