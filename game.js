function getComputerChoice(){
    res = Math.floor(Math.random()*3);
    ans = res < 1? "rock":res<2?"paper":"scissors";
    return ans;

}

function getHumanChoice(){
    choice = prompt("Enter your pick:");
    return choice.toLowerCase();
}

function playGame()
{
    console.log("Welcome to the game!");
    let HumanScore = 0;
    let ComputerScore = 0;
    
    function playRound(computerChoice,humanChoice){
    
            if (computerChoice == "rock")
            {
                if (humanChoice == "paper")
                {
                    HumanScore += 1;
                    console.log("You win! Paper beats Rock");
                }
            else if (humanChoice == "scissors")
            {
                ComputerScore += 1;
                console.log("You lose! Rock beats Scissors ");
            }
            else
            {
                console.log("It's a draw!");
            }
        }

        else if (computerChoice == "paper")
        {
            if (humanChoice == "rock")
            {
                ComputerScore += 1;
                console.log("You lose! Paper beats Rock ");
            }
            else if (humanChoice == "scissors")
            {
                HumanScore += 1;
                console.log("You win! Scissors beats Paper");
            }
            else
            {
                console.log("It's a draw!");
            }
        }
        else
        {
            if (humanChoice == "rock")
            {
                HumanScore += 1;
                console.log("You win! Rock beats Scissors");
            }
            else if (humanChoice == "paper")
            {
                ComputerScore += 1;
                console.log("You lose! Scissors beats Paper");
            }
            else
            {
                console.log("It's a draw!");
            }
        }

    }

    while (HumanScore < 5 && ComputerScore<5)
    {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice,humanChoice);
        
    }
    // for (let i = 0;i<5;i++){
    //     let computerChoice = getComputerChoice();
    //     let humanChoice = getHumanChoice();
    //     playRound(computerChoice,humanChoice);
    //     console.log(`Your Score: ${HumanScore} vs Computer Score: ${ComputerScore}`);
    // }

    // if (HumanScore>ComputerScore)
    // {
    //     console.log("Congrats! You are the winner");
    // }
    // else
    // {
    //     console.log("You lose!");
    // } 
}

playGame();
