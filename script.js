let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * option.length);
  return option[random];
};

const drawGame = () => {
  result.innerText = "Game was draw.";
  result.style.backgroundColor = "#023047";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    result.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
    result.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    result.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    result.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //generate computer choice
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    // checkWinnerHandler(userSelectedOpt, compSelectedOpt);
  });
});
