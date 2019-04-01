function getUserChoice() {//je recupere le choix de l'utilisateur
    userInput = prompt('Quelle coup voulez vous jouer ?');//je demmande à l'utilisateur quell coup il veur jouer
    userInput = userInput.toLowerCase();//je met tout en bas de casse au cas ou l'utilisateur a mis une lettre en capitale

    switch (userInput) {

        case 'rock':
            console.log('You Rock !!!')
            break;

        case 'paper':
            console.log('You Paper !!!')
            break;

        case 'scissors':
            console.log('you Scissors')
            break;

        default:
            console.log('you sucks !!!!!')
            break;

    }
    return userInput;
}



function getComputerChoice() {
    var des = Math.floor(Math.random(3));
    console.log(des);
    var computerChoice = '';
    switch (des) {

        case 0:
            computerChoice = 'rock'
            break;

        case 1:
            computerChoice = 'paper'
            break;

        case 2:
            computerChoice = 'scissors'
            break;
    }
    console.log(computerChoice);
    return computerChoice;

}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        console.log('Vous avez gagné !!!!')
    }

    if (userChoice === computerChoice) {
        console.log('Egalité !!!')
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            console.log('Vous avez gagné !!!!')
        }else if (computerChoice === 'paper') {
            console.log('Vous avez perdu !!!!')
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('vous avez gagné !!!!')
        } else if (computerChoice === 'scissors') {
            console.log('Vous avez perdu !!!!')
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            console.log('vous avez gagné !!!!')
        } else if (computerChoice === 'rock') {
            console.log('Vous avez perdu !!!!')
        }
    }
}

function playGame() {
    var uChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice();
    console.log(uChoice);
    console.log(computerChoice);
    determineWinner(uChoice, computerChoice);
}
playGame();

