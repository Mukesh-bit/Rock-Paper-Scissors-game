const userScore = document.getElementById('user-score');
const compScore = document.getElementById('comp-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result');
const resultP = document.querySelector('#result-p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissor = document.getElementById('s');

let uScore = 0;
let cScore = 0;


function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomChoices = Math.floor(Math.random() * 3);
    return choices[randomChoices];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    uScore++;
    userScore.innerHTML = uScore;
    resultP.innerHTML = `${convertToWord(userChoice)}(User) beats ${convertToWord(computerChoice)}(Comp) you win`
}

function lose(userChoice, computerChoice) {
    cScore++;
    compScore.innerHTML = cScore;
    resultP.innerHTML = `${convertToWord(userChoice)}(User) beats ${convertToWord(computerChoice)}(Comp) you Lose...`
}

function draw(userChoice, computerChoice) {
    resultP.innerHTML = `${convertToWord(userChoice)}(User) equal ${convertToWord(computerChoice)}(Comp) It's draw...`
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":    
        case "ps":    
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":        
        case "pp":        
        case "ss":
            draw(userChoice, computerChoice);
            break;        
    }
}

rock.addEventListener('click', () => {
    game("r");
})

paper.addEventListener('click', () => {
    game("p");
})

scissor.addEventListener('click', () => {
    game("s");
})