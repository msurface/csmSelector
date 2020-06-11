// UI elements
const answerInput = document.querySelector('#css-selector');
const answerSubmitBtn = document.querySelector('#answer-submit');
const startBtn = document.querySelector('#start');
const answerSection = document.querySelector('.answer');
const guessesSpan = document.querySelector('#guesses-remaining');
const answerForm = document.querySelector('.answer-form');
const minutesSpan = document.querySelector('#minutes');
const secondsSpan = document.querySelector('#seconds');

// global variables
let guesses = 3;

// TODO: Click to start which starts a timer.
// Step 1: create the start button
// Step 2: Add the click listner
// Step 3: Create a function that starts and displays a timmer
// TODO: guess counter -- 5 guesses and its over.
// Add a display
// TODO: If the answer is correct instructions to screen shot and send it over.
// TODO: If incorrect then write down confusing parts.

// Functions
function checkAnswer(e) {
  console.log(e);
  // Storing the answer
  const answer = answerInput.value;
  console.log(answer);
  console.log(guesses);

  if (answer === '#form-section > input' || answer === '#form-section input') {
    console.log('correct answer');
    confirmAnswer(
      `"${answer}" is correct! Please take a screen shot of your answer and time.`,
      'teal lighten-2'
    );
    taskWin();
  } else if (guesses === 1) {
    console.log('ZERO');
    confirmAnswer(
      `"${answer}" is not the correct answer, No More Guesses!`,
      'red lighten-1'
    );
    disableTask();
  } else {
    confirmAnswer(
      `"${answer}" is not the correct answer, try again!`,
      'red lighten-1'
    );
    guesses--;
    guessesSpan.innerText = guesses;
    removeWrongAlert();
    console.log('incorrect answer');
  }

  e.preventDefault();
}

// task win
function taskWin() {
  document.querySelector('.answer h4.center-align').innerText =
    'Take a Screen Shot of Your Answer and Time';
  clearInterval(interval);
}

// stop the task
function disableTask() {
  guessesSpan.innerText = 0;
  answerForm.style.display = 'none';
  document.querySelector('.answer h4.center-align').innerText = 'Game Over';
  clearInterval(interval);
}

// start click function
function startTask(e) {
  startBtn.style.display = 'none';
  document.querySelector('#form-section input').style.display = 'block';
  answerSection.style.display = 'block';
  guessesSpan.innerText = guesses;
}

// answer submit function
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

// Count Up Timer
let seconds = 0;
let minutes = 0;

let interval = setInterval(increment, 1000);

function increment() {
  seconds++;
  secondsSpan.innerText = seconds;

  // setting the minutes HTML
  if (minutes < 10) {
    minutesSpan.innerText = `0${minutes}`;
  } else {
    minutesSpan.innerText = minutes;
  }

  // setting the seconds
  if (seconds < 10) {
    secondsSpan.innerText = `0${seconds}`;
  } else {
    secondsSpan.innerText = seconds;
  }

  if (seconds === 59 && minutes <= 15) {
    seconds = 0;
    minutes++;
  } else if (minutes >= 15) {
    // console.log('CLEAR MINUTES');
    confirmAnswer(`Time is Up. Rejoin the Group.`, 'red lighten-1');
    secondsSpan.innerText = `00`;
    disableTask();
  }

  // console.log(seconds);
}

// Event Listners
answerSubmitBtn.addEventListener('click', checkAnswer);
startBtn.addEventListener('click', startTask);
window.addEventListener('load', () => {
  document.querySelector('#form-section input').style.display = 'none';
  answerSection.style.display = 'none';
});
