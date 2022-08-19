"use strict";
// const message = document.querySelector(".message");
// message.textContent = "correct number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector(".message");
document.querySelector(".again");
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    displayMessage("No number");
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("correct number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore ").textContent = highscore;
    }
    //when score is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game lol loser");
    }
  }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       message.textContent = "Too High!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       message.textContent = "You lost the game lol loser";
  //     }
  //     //when score is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       message.textContent = "Too Low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       message.textContent = "You lost the game lol loser";
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
