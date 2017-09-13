let countdown;
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

//generate random time for game length
function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//sets up random holes 
function randHoles(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randHoles(holes);
    }

    lastHole = hole;
    return hole;
}

//pops up moles w/ randomw time and random hole
function peep() {
    const time = randTime(200, 1000);
    console.log("Peep Time: ", time / 1000);
    const hole = randHoles(holes);
    hole.classList.add('up');
    setTimeout(() => { 
        hole.classList.remove('up')
        if (!timeUp) peep();
    }, time);
}

//starts the game
function startGame() {
    var message = "Whack-a-mole!"
    var seconds = 9;
    var gameLength = 10000;
    scoreBoard.textContent = 0;
    document.getElementById("timer").innerHTML = (seconds + 1);
    document.getElementById("banner").innerHTML = message;
    score = 0;
    timeUp = false;
    moleTimer(seconds);
    peep();
    setTimeout(() => {
        timeUp = true
        var message = "Game Over!"
        document.getElementById("banner").innerHTML = message;
        console.log(score);
    }, gameLength);
    
}

//controls the hit on the moles
function bonk(e) {
    if (!e.isTrusted) return;
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;

}

function moleTimer(seconds) {
    var timer = seconds;
    
    var gameLenght = setInterval(function () {

        document.getElementById("timer").innerHTML = timer;
        console.log("Timer: ",timer);
        if (--timer < 0) {
            clearInterval(gameLenght);
        }
    }, 1000);
    
}

moles.forEach(mole => mole.addEventListener('click', bonk));
