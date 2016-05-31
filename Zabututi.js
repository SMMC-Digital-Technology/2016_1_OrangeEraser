var inputincome = document.getElementById("inputincome").value;
var tax = 0;


var Incomevalue1 = 184500;
var Incomevalue2 = 113000;
var Incomevalue3 = 52500;
var Incomevalue4 = 16000;
var Incomevalue5 = 0;

function incomeTax(income) {
    if (inputincome > Incomevalue1){
        var dif = Income - Incomevalue1;
        var dif1 = dif * 0.36 + 39400;
        tax.innerHTML = dif1;
    }else if (inputincome > Incomevalue2){
        var diff = Income - Incomevalue2;
        var diff1 = diff * 0.24 + 13330;
        tax.innerHTML = diff1;
    }else if (inputincome > Incomevalue3){
        var difff = Income - Incomevalue3;
        var difff1 = difff * 0.16 + 3650;
        tax.innerHTML = difff1;
    }else if (inputincome > Incomevalue4){
        var dix = Income - Incomevalue4;
        var dix1 = dix * 0.10;
        tax.innerHTML = dix1;
    }else {
        
    }
    return tax;
}
    
    
    else if (guess > number){
        var dif = number - guess;
        if (dif < 30) {
            statementDisplay.innerHTML = STATEMENT_SMALLER;
        } else {
            statementDisplay.innerHTML = STATEMENT_LOWER;
        }
























/*
* This is the guessing game script.
*/

/* This section runs when the script loads, but what it does is 
* create variables and constants for the game.
*/
// the random number for the player to guess
var number = getRandomInt(0, 100);
// the input field
var inputGuess = document.getElementById("inputGuess");
// the statement display
var statementDisplay = document.getElementById("statement");

// the statements
// The variable names are in capital letters to indicate that
// they are constants (variables that keep the same value).
// The use of capitals means nothing to the program, it is
// just a visual reminder.
var STATEMENT_LARGER = "My number is larger.";
var STATEMENT_HIGHER = "My number is much higher than that!";
var STATEMENT_SMALLER = "My number is smaller.";
var STATEMENT_LOWER = "My number is much lower than that!";
var STATEMENT_CORRECT = "Correct!<br>My number was ";
var STATEMENT_NEW = "<br><br>Can you guess my new number?";

/* This function runs when a number is entered into the field.
* It first checks if the guess is small, then larger, otherwise it
* is correct.
*/
function guessMade() {
    var guess = inputGuess.value;
    if (guess < number) {
        var diff = number - guess;
        if (diff > 30) {
            statementDisplay.innerHTML = STATEMENT_HIGHER
        } else {
            statementDisplay.innerHTML = STATEMENT_LARGER
        }
    }
    else if (guess > number){
        var dif = number - guess;
        if (dif < 30) {
            statementDisplay.innerHTML = STATEMENT_SMALLER;
        } else {
            statementDisplay.innerHTML = STATEMENT_LOWER;
        }
    }
    else{
        statementDisplay.innerHTML = STATEMENT_CORRECT + number + STATEMENT_NEW;
        number = getRandomInt(0,100);
    }
}


/* Returns a random integer between min (included) and max (excluded)
 from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}