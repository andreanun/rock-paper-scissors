function playGame() {
  const options = ["rock", "paper", "scissors"];
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    let index = Math.floor(Math.random() * options.length);
    return options[index];
  }

  //getComputerChoice();
  function getHumanChoice() {
    let choice = null;
    while (
      !choice ||
      !["rock", "paper", "scissors"].includes(choice.toLowerCase())
    ) {
      choice = window.prompt("Enter rock, paper, or scissors:");
      if (choice === null) return null; // user canceled
    }
    return choice.toLowerCase();
  }

  function checkWinner(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      computerScore++;
      humanScore++;
      return "Tie";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      return "Player";
    } else {
      computerScore++;
      return "Computer";
    }
  }

  //getHumanChoice
  function playRound(humanChoice, computerChoice) {
    const result = checkWinner(humanChoice, computerChoice);
    if (result === "Tie") {
      console.log("It's a tie ._.");
    } else if (result === "Player") {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else {
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
  }
  // Testing
  // console.log(`Computer chose: ${computerSelection}`);
  // console.log(`You chose: ${humanSelection}`);

  // console.log(playRound(humanSelection, computerSelection));

  // console.log(`Computer score: ${computerScore}`);
  // console.log(`Your score: ${humanScore}`);
  let i = 0;
  while (i < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    i += 1;
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
  }
}

playGame();
