function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            break;
    }
}

function getHumanChoice() {
    let user_input = prompt("Enter Your Choice: ");
    return user_input.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`HumanChoice: ${humanChoice}`);
        console.log(`ComputerChoice: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("We have a tie");
            return;
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("HUMAN WINS");
            humanScore = humanScore + 1;
            console.log(humanScore);
        } else {
            console.log("COMPUTER WINS");
            computerScore = computerScore + 1;
            console.log(computerScore);
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.clear();
        console.log(`HumanScore: ${humanScore},  ComputerScore: ${computerScore}`)
        console.log(`Human Wins The Game with a score of: ${humanScore}`);
    } else {
        console.clear();
        console.log(`HumanScore: ${humanScore},  ComputerScore: ${computerScore}`)
        console.log(`COmputer Wins The Game with a score of: ${computerScore}`);
    }
}

playGame();
