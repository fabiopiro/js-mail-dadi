// 2 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
var randomOne = Math.floor ((Math.random()*6) + 1);
console.log(randomOne);
document.getElementById("first").innerHTML = "YOU - " + randomOne;

var randomTwo = Math.floor ((Math.random()*6) + 1);
console.log(randomTwo);
document.getElementById("second").innerHTML = "COMPUTER - " + randomTwo;


// Stabilire il vincitore, in base a chi fa il punteggio più alto
var message = "THE COMPUTER WON with " + randomTwo + " over yours " + randomOne;

if (randomOne > randomTwo) {
    message = "YOU WIN with " + randomOne + " over the computer's " + randomTwo;
} else if (randomOne == randomTwo) {
    message = "DRAW everybody rolled " + randomOne;
}

console.log(message);
document.getElementById("result").innerHTML = message;