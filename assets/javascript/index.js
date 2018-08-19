var Word = require('./word');
var RandomWord = require('./list');
var inquirer = require('inquirer');
var guessesWrong = 0;
var pastGuesses = [];

var MyWord = new Word();
var newWord = RandomWord.getRandomWord(); // getRandomWord is a function stored in list.js. It takes the quantity of words in the random word array, randomizes that number by multiplying it by the math.random function, and then takes the array index corresponding to said number in order to pick that word.
MyWord.setWord(newWord); // takes the randomly created word, and sets it as the main word used by the setWord function. This function pushes the letters of this word into the Letter prototype that is being used. 

function playGame() {
    console.log('guesses wrong: ' + guessesWrong + '\n');
    if ((guessesWrong < 8) && (!MyWord.isComplete())) { // Maximum guesses is set to 8. This checks if we are still within this parameter and if the word has NOT been completed. (!) sets the "not" aspect.
        inquirer.prompt([{ // prompts user to enter a string value of a single letter.
            type: 'string',
            message: 'Enter a letter',
            name: 'letter'
        }]).then(function(answers) { // takes the MyWord prototype and adds the letter provided by the user. (the answer letter).
            MyWord.addLetter(answers.letter);
            if (!MyWord.isCorrectGuess(answers.letter)) { // points to the function isCorrectGuess which runs a for loop that checks the guessed letter against the secret word letter whose index you are currently on to verify that it is indeed an accurate letter.
                if (pastGuesses.indexOf(answers.letter) === -1) { // checks the newly guessed letter against the pastGuesses array. if it is not included in this array, it increments the guesses wrong counter and pushes the letter into the array. Guesses index of set to -1 basically ensues it is NOT within the array.
                    guessesWrong++;
                    pastGuesses.push(answers.letter);
                }
            }
            MyWord.displayWord(); // Shows whatever has been guessed.
            playGame(); // recursive way to loop through the function again simply by calling it.
        });
    } else { // The above code recursively repeats until the word has been completely solved, or until the guesses have expired.
        if (MyWord.isComplete()) {
            console.log('You win!!!!!!!!!!!!!!!!!!!!!!!!!!!'); // if the word has completely been filled, you win the game.
        } else {
            console.log('game over. The correct word was ' + newWord); // if the word has NOT been completely filled but the guesses are up, it prompts the secret word which is stored in 'newWord'.
        }
        guessesWrong = 0; // resets the wrong guesses back down to 0.
        playAgain();
    }
}
function playAgain(){ // This function asks the user if they want to play again. If yes is written, the playgame() is activated. If not, the connection is ended.
    inquirer.prompt([{ 
        type: 'choice',
        name: "playagain",
        message: 'Do you want to play again?',
        choices: ['yes', 'no']
    }]).then(function(answers){
        if (answers.playagain === 'yes') {
            playGame();
        } else {
            connection.end();
        }
});
}

playGame(); //resets the game.