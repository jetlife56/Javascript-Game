    // Letter Var
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Setting zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachOfLetters = null;


// Game
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
function countLeft(){
    document.querySelector("#guess").innerHtml = "Guesses Left: " + guessesLeft;
}
function letters() {
    document.querySelector("#countedLetters").innerHTML = "Your Guesses so far: " + letterUser.join(' ');

}
countLeft();


var restart = function() {
    guessesLeft = 9;
    letterUser = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

document.onkeyup = function(event) {
    guessesLeft--;

    var userAnwser = String.fromCharCode(event.keyCode).toLowerCase();
    letterUser.push(userAnwser);
    countLeft();
    letters();

    if (userAnwser === computerGuess) {
        wins++;
        document.querySelector("#winner").innerHTML = "Wins: " + wins;
        restart();

    }
    else if ( guessesLeft === 0) {
        losses++;
        document.querySelector("#loser").innerHTML = "Losses: " + losses;
        restart();
    } 
};