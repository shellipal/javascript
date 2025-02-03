# Project releted to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
console.log("Shelli");

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch ((body.style.backgroundColor = e.target.id)) {
      case 1:
        e.target.id === "grey";
        break;
      case 2:
        e.target.id === "white";
        break;
      case 3:
        e.target.id === "blue";
        break;
      case 4:
        e.target.id === "yellow";
        break;
      case 5:
        e.target.id === "purple";
        break;
    }
  });
});
```

## Project 2

## Solution

```javascript
const form = document.querySelector(".form");

// this usecase will give you empty value
// const Height = parseInt(document.querySelector("#Height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const Height = parseInt(document.querySelector("#Height").value);
  const Weight = parseInt(document.querySelector("#Weight").value);
  const Results = document.querySelector("#results");

  let text = "";

  if (Height === " " || Height < 0 || isNaN(Height)) {
    Results.innerHTML = `Please give a valid height ${Height}`;
  } else if (Weight === "" || Weight < 0 || isNaN(Weight)) {
    Results.innerHTML = `Please give a valid Weight ${Weight}`;
  } else {
    const BMI = (Weight / ((Height * Height) / 10000)).toFixed(2);

    if (BMI < 18) {
      text = "Underweight";
      Results.style.color = "red";
    } else if (BMI > 18 && BMI < 24) {
      text = "Normal";
      Results.style.color = "green";
    } else {
      text = "overweight";
      Results.style.color = "blue";
    }

    // Show the Result
    Results.innerHTML = `<span>${BMI} (${text})</span>`;
  }
});
```

## Project 3

## Solution

```javascript
const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4

## Solution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const userSlot = document.querySelector(".guesses");
const remaning = document.querySelector(".lastResult");
const lowOrHI = document.querySelector(".lowOrHI");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more then 1");
  } else if (guess > 100) {
    alert("Please enter a number less then 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over.Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  userSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaning.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHI.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    userSlot.innerHTML = "";
    remaning.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
```

## Project 5

## Solution

```javascript
// Generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const StartChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const StopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", StartChangingColor);

document.querySelector("#stop").addEventListener("click", StopChangingColor);
```

## Project 6

## Solution

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class = 'color'>
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>

    </div>
    `;
});
```
