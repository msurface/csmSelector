// UI elements
const answerInput = document.querySelector('#css-selector');
const answerSubmitBtn = document.querySelector('#answer-submit');

// Functions
function checkAnswer(e) {
  console.log(e);
  // Storing the answer
  const answer = answerInput.value;
  console.log(answer);

  if (answer === '.form-section > input' || answer === '.form-section input') {
    console.log('correct answer');
    confirmAnswer(`"${answer}" is correct!`, 'teal lighten-2');
  } else {
    confirmAnswer(
      `"${answer}" is not the correct answer, try again!`,
      'red lighten-1'
    );
    removeWrongAlert();
    console.log('incorrect answer');
  }

  e.preventDefault();
}

// when the answer is right
function confirmAnswer(message, className) {
  // Create deiv
  const div = document.createElement('div');
  // add classNames
  div.className = `alert center-align ${className}`;
  // create textNode
  div.appendChild(document.createTextNode(message));
  // container
  const container = document.querySelector('.answer');
  const insertBefore = document.querySelector('.answer div.row');

  container.insertBefore(div, insertBefore);
  clearInput();
  console.log(div);

  // Timout after 3 seconds
}

// clear field
function clearInput() {
  answerInput.value = '';
}

// remove confirm answer message if wron
function removeWrongAlert() {
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 5000);
}

// Event Listners
answerSubmitBtn.addEventListener('click', checkAnswer);
