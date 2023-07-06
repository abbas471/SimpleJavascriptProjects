function countWords() {
  var text = document.getElementById('textInput').value;
  
  // Clear previous error message
  document.getElementById('error').textContent = '';
  
  if (text.trim() === '') {
    // Display error message for empty input
    document.getElementById('error').textContent = 'Please enter some text.';
    document.getElementById('result').textContent = '';
    return;
  }
  
  // Remove punctuation and special characters
  var cleanedText = text.replace(/[^\w\s]/g, '');
  
  // Splitting the cleaned text into words using whitespace as a delimiter
  var words = cleanedText.trim().split(/\s+/);
  var wordCount = words.length;
  
  document.getElementById('result').textContent = wordCount;
}
