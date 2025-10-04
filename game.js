function palyGame() {
  const options = ["rock", "paper", "scissors"];
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    let index = Math.floor(Math.random() * options.length);
    return options[index];
  }

  //getComputerChoice();
  function getHumanChoice() {
    return window.prompt();
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
      return "It's a tie ._.";
    } else if (result === "Player") {
      return `You Win! ${humanChoice} beats ${computerChoice}`;
    } else {
      return `You Lose! ${computerChoice} beats ${humanChoice}`;
    }
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  // console.log(`Computer chose: ${computerSelection}`);
  // console.log(`You chose: ${humanSelection}`);

  // console.log(playRound(humanSelection, computerSelection));

  // console.log(`Computer score: ${computerScore}`);
  // console.log(`Your score: ${humanScore}`);
}

//playGame()
