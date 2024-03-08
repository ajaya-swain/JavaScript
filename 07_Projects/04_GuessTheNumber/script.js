let randomNumber = parseInt(Math.random() * 100 + 1); //create random number between 1-100  //parseInt helps to remove decimal

console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".remaining");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);

    console.log(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    //isNaN is a method to check num or not
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please Enter a Number Greater than 0");
  } else if (guess > 100) {
    alert("Please Enter a Number Less than or Equal to 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over.. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

function displayGuess(guess) {
  userInput.value = ""; //clean up the input field after every guess
  guessSlot.innerHTML += `${guess} `; // += will keep adding the guesses instead of only current guesss
  remaining.innerHTML = `${10 - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ""; //clean up the input field
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");

  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;

  submit.style.backgroundColor = "#e23eb6";
  submit.style.color = "#e23eb6";

  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);

    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");

    startOver.removeChild(p);

    submit.style.backgroundColor = "#5d1653";
    submit.style.color = "#ffffff";

    playGame = true;
  });
}
