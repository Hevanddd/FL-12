`use strict`;

if (confirm(`Do you want to play a game?`)) {
    const ATTEMPSTS = 3;
    let rate = 25;
    let range = 5;
    let gameIsWorking = true;
    let totalPrize = 0;
    
    while (gameIsWorking) {
        
        let randomNumber = Math.floor(Math.random() * (range + 1));
        for (let i = 0; i < ATTEMPSTS; i++) {
            let currentPrize = 0;

            switch (i) {
                case 0:
                    currentPrize = rate * 4;
                    break;
                case 1:
                    currentPrize = rate * 2;
                    break;
                case 2:
                    currentPrize = rate;
                    break;
                default:
                    alert('Something is going wrong.')
                    break;
            }

            let userChoice = +prompt(`Choose a roulette pocket number from 0 to ${range}
Attempst left: ${ATTEMPSTS-i}
Total prize: ${totalPrize}
Possible prize on current attempt: ${currentPrize}`);

            if (userChoice === randomNumber) {
                totalPrize += currentPrize;
                if (confirm(`Congratulation, you won! Your prize is: ${totalPrize}. Do you want to continue?`)) {
                    rate *= 2;
                    range += 5;
                    break;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${totalPrize}`);
                    if (confirm(`Do you want to play again?`)) {
                        totalPrize = 0;
                        rate = 25;
                        range = 5;
                    } else {
                        gameIsWorking = false;
                    }
                }
            } else if (i === 2) {
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`)
                if (confirm('Do you want to play again?')) {
                    totalPrize = 0;
                    rate = 25;
                    range = 5;
                } else {
                    gameIsWorking = false;
                }
            }
        }

    }
} else {
    alert(`You did not become a billionaire, but can.`)
}