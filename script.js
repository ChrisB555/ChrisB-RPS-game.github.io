const game = () => {
    let playerScore = 0;
    let computerScore = 0;  
    const playRound = () => {
        const rock = document.querySelector('#rock');
        const paper = document.querySelector('#paper');
        const scissors = document.querySelector('#scissors');
        const playerSelection = [rock,paper,scissors];
        const computerSelection = ['rock','paper','scissors']          
        playerSelection.forEach(option => {
            option.addEventListener('click',function() {
                const computerChoice = computerSelection[Math.floor(Math.random() * computerSelection.length)];
                winner(this.innerText,computerChoice);
                gameOver();            
            })
        })      
    }
    const winner = (player,computer) => {
        const result = document.querySelector('#result');
        const playerScoreDisplay = document.querySelector('#playerScore');
        const computerScoreDisplay = document.querySelector('#computerScore');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = `IT'S A TIE !!  YOU BOTH CHOSE: ${player.toUpperCase()}`;
        }
        else if(player === 'rock' && computer === 'paper'){
                result.textContent = `YOU CHOSE: ${player.toUpperCase()},
                COMPUTER CHOSE: ${computer.toUpperCase()},
                COMPUTER WON!`;
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
        }
       else if(player === 'rock' && computer === 'scissors'){
                result.textContent = `YOU CHOSE: ${player.toUpperCase()}, 
                COMPUTER CHOSE: ${computer.toUpperCase()},
                PLAYER WON!`;
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
         }      
        else if(player === 'scissors' && computer === 'rock'){
                result.textContent = `YOU CHOSE: ${player.toUpperCase()}, 
                COMPUTER CHOSE: ${computer.toUpperCase()},
                 COMPUTER WON!`;
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
        }
        else if(player === 'scissors' && computer === 'paper'){
                result.textContent = `YOU CHOSE: ${player.toUpperCase()}, 
                COMPUTER CHOSE: ${computer.toUpperCase()},
                PLAYER WON!`;
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
         }       
        else if(player === 'paper' && computer === 'scissors'){
                result.textContent = `YOU CHOSE: ${player.toUpperCase()} ,
                COMPUTER CHOSE: ${computer.toUpperCase()},
                 COMPUTER WON!`;
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
        }
        else if(player === 'paper' && computer === 'rock'){
                result.textContent = `YOU CHOSE: ${player.toUpperCase()}, 
                COMPUTER CHOSE: ${computer.toUpperCase()},
                PLAYER WON!`;
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
            }      
    }
    const gameOver = () => {
        const finalResult = document.querySelector('#finalResult');
        const replay = document.querySelector('.replay');      
        if(playerScore > computerScore && playerScore === 5 ){
            finalResult.innerText = 'YOU WON !!!'
            finalResult.style.color = 'rgb(0, 255, 47)';
            replay.innerText = 'PLAY AGAIN';
            replay.style.display = 'block';
            result.style.display = "none";
        }
        else if(playerScore < computerScore && computerScore === 5){
            finalResult.innerText = 'YOU LOST !!!';
            finalResult.style.color = 'red';  
            replay.innerText = 'PLAY AGAIN!';
            replay.style.display = 'block';
            result.style.display = "none";
        }                
        replay.addEventListener('click',() => {
            window.location.reload();
        })
    }
    playRound();     
}
game();