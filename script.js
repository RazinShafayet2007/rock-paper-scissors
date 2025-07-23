const resetBtn = document.querySelector('.reset');
const humanScore = document.getElementById('human-point');
const humanPick = document.getElementById('human-pick');
const computerScore = document.getElementById('computer-point');
const computerPick = document.getElementById('computer-pick');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const commentsForHuman = [
    "You lost!",
    "You are too weak!",
    "You are a loser!",
    "You are terrible!",
    "Your future is black!",
    "You don't belong to humanity!",
    "You are a disgrace!",
    "You are a failure!",
    "You are a disgrace to your girlfriend!",
    "You are worthless!",
    "You must to too weak on bed!",
];

const commentsForComputer = [
    "Computer is a winner!",
    "Computer is too strong!",
    "Computer is a champion!",
    "Computer is unbeatable!",
    "You can't defeat AI!",
    "AI will take your job!",
]

rock.addEventListener('click', () => {
    humanChoice = choices[0];
    humanPick.textContent = 'You chose: Rock';
    getComputerChoice();
    updateScore();

});

paper.addEventListener('click', () => {
    humanChoice = choices[1];
    humanPick.textContent = 'You chose: Paper';
    getComputerChoice();
    updateScore();
});

scissors.addEventListener('click', () => {
    humanChoice = choices[2];
    humanPick.textContent = 'You chose: Scissors';
    getComputerChoice();
    updateScore();

});

const choices = ['Rock', 'Paper', 'Scissors'];
let computerChoice = '';
let humanChoice = '';
let humanPoints = 0;
let computerPoints = 0;



const getComputerChoice = () => {
    if (humanChoice === choices[0]) {
        computerChoice = choices[1];
        computerPick.textContent = 'Computer chose: Paper';
    } else if (humanChoice === choices[1]) {
        computerChoice = choices[2];
        computerPick.textContent = 'Computer chose: Scissors';
    } else if (humanChoice === choices[2]) {
        computerChoice = choices[0];
        computerPick.textContent = 'Computer chose: Rock';
    }
};


const updateScore = () => {
    if (
        (humanPick.textContent.includes('Rock') && computerChoice === choices[1]) ||
        (humanPick.textContent.includes('Paper') && computerChoice === choices[2]) ||
        (humanPick.textContent.includes('Scissors') && computerChoice === choices[0])
    ) {
        computerPoints++;
    } else {
        humanPoints++;
    }

    humanScore.textContent = humanPoints;
    computerScore.textContent = computerPoints;

    checkWinner();
}

const checkWinner = () => {
    if (humanPoints === 5) {
        humanPick.textContent = 'You won!!!!!!!!';
        computerPick.textContent = 'Computer lost!';
        disableButtons();
    } else if (computerPoints === 5) {
        const indexForComputer = Math.floor(Math.random() * commentsForComputer.length);
        const indexForHuman = Math.floor(Math.random() * commentsForHuman.length);
        humanPick.textContent = commentsForHuman[indexForHuman];
        computerPick.textContent = commentsForComputer[indexForComputer];
        disableButtons();
    }
}

const disableButtons = () => {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

const resetGame = () => {
    humanPoints = 0;
    computerPoints = 0;
    humanScore.textContent = '';
    computerScore.textContent = '';
    humanPick.textContent = 'You chose:';
    computerPick.textContent = 'Computer chose:';
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

resetBtn.addEventListener('click', resetGame);



