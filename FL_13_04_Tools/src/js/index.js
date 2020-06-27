import getComputerChoice from './computer-choice';
import convertToWord from './convert-to-word';

import paper from "../img/paper.png";
import rock from "../img/rock.png";
import scissors from "../img/scissors.png";

import '../scss/app.scss';

const userChoices = document.querySelectorAll('.user-choice');
const resetButton = document.querySelector('.reset-button');
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const infoTable = document.querySelector('.info-table');

userChoices[0].src = rock;
userChoices[1].src = paper;
userChoices[2].src = scissors;

let round = 0;
let userScore = 0;
let computerScore = 0;

function startGame() {
    round = 0;
    userScore = 0;
    computerScore = 0;
    infoTable.textContent = 'Do your Choice!';
    userScore_span.textContent = '0';
    computerScore_span.textContent = '0';
    userChoices.forEach(el => {
        el.addEventListener('click', getUserChoice);
    })
};

const getUserChoice = (event) => {
    const choice = event.target.id;
    game(choice);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loses(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draws(userChoice, computerChoice);
            break;
    }
};

function wins(userChoice, computerChoice) {
    round++;
    userScore++;
    userScore_span.textContent = userScore;
    infoTable.textContent = `Round ${round}, ${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("green-glow");
    }, 500);
    if (userScore === 3) {
        infoTable.textContent = 'You Won! Press reset to play again';
        stopGame();
    }
}

function loses(userChoice, computerChoice) {
    round++;
    computerScore++;
    computerScore_span.textContent = computerScore;
    infoTable.textContent = `Round ${round}, ${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost...`
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("red-glow")
    }, 500);
    if (computerScore === 3) {
        infoTable.textContent = 'Computer Won! Press reset to play again';
        stopGame()
    }
}

function draws(userChoice, computerChoice) {
    round++;
    infoTable.textContent = `Round ${round}, ${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw.`
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("grey-glow")
    }, 500);
}

function stopGame() {
    userChoices.forEach(el => {
        el.removeEventListener('click', getUserChoice);
    })
}

resetButton.addEventListener('click', function () {
    startGame();
})

startGame();