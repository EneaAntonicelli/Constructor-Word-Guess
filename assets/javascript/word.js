var Letter = require('./letter'); // require the letter module since we will be making use of it's boolean switch.

var Word = function() {
	this.lettersGuessed = [];
	this.word = [];

	this.addLetter = function(letter) {
		this.lettersGuessed.push(letter); // pushes the guessed letter into the above lettersGuessed array.
		this.updateWord(letter); // pushes this guessed letter as an argument into the function 'updateWord'.
	}

	this.setWord = function(newWord) { // I suppose this could be moved up or down in the order of functions but what this does is take the secret word as an argument, cycles through it's length, and then pushes each character through to the a prototype built from the Letter constructor..
		for (var i = 0; i < newWord.length; i++) {
			this.word.push(new Letter(newWord.charAt(i)));
		}
	}

	this.updateWord = function(letter) { // this takes the guessed letter as an argument, it loops through the secret word and checks the letter against each iteration. It matches, it sets the displayLetter switch/boolean to true.
		for (var i = 0; i < this.word.length; i++) {
			if (this.word[i].letter === letter) {
				this.word[i].displayLetter = true;
			}
		}
	}

	this.displayWord = function() { // Creates an empty placeholder string, loops through the secret word's letters, gets each letter that has been recorded with the 'getLetter' function from (module letter.js) and adds it to the string 'displayedWord". It then logs this string.
		var displayedWord = '';
		for (var i = 0; i < this.word.length; i++) {
			displayedWord += this.word[i].getLetter() + ' ';
		}
		console.log('\n' + displayedWord + '\n');
	}

	this.isComplete = function() { // function that checks to see if the word has been guessed to completion. It loops through the secret word's length and for wach iteration, it checks if module letter.js's switch/boolean is still set to false. If it is, the game continues. If it is set to true, then it means the entire word has been guessed.
		for (var i = 0; i < this.word.length; i++) {
			if (this.word[i].displayLetter === false) {
				return false;
			}
		}
		return true;
	}

	this.isCorrectGuess = function(letter) { // This simply checks if the letter guessed matches any of the secret word letters. This could be moved anywhere and it would not make a difference... 
		for (var i = 0; i < this.word.length; i++) {
			if (this.word[i].letter === letter) {
				return true;
			}
		}
		return false;
	}
}

module.exports = Word;