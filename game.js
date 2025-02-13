function getComputerChoice(){
    let res = Math.floor(Math.random()*3);
    let ans = res < 1? "rock":res<2?"paper":"scissors";
    return ans;

}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(humanChoice,computerChoice){

    if (humanChoice === computerChoice) {
        // It's a tie, no score change
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        )   {
            humanScore += 1; // Human wins
            } 
    else {
        computerScore += 1; // Computer wins
    }

    const score = document.querySelector('.score');
    score.textContent = `Your Score: ${humanScore} vs. Computer Score: ${computerScore}`;

    const moves = document.querySelector(".moves");
    moves.textContent = `Your move: ${humanChoice} vs. Computer Move: ${computerChoice}`;

    if (humanScore === 5 || computerScore === 5)
    {
        gameOver = true;
        declareWinner();
    }

}

function declareWinner()
{
    const score = document.querySelector(".score");
    
    if (humanScore > computerScore)
    {
        score.textContent = "You Win!";
    }
    else if (humanScore == computerScore)
    {
        score.textContent = "It' s a tie";
    }
    else{
        score.textContent = "You Lose!";
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click',()=>{
        if (!gameOver)
        {
            const computerChoice = getComputerChoice()
            playRound(button.className,computerChoice);
        }
            
    });
});


