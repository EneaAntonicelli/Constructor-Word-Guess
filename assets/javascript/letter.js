var Letter = function(letter) {
	this.letter = letter; // Passing 'letter' into the constructor argument so as to be able to call this constructor by the name 'letter'. This can be anything. Common practice I have noticed has been for all three of these values to match.
	this.displayLetter =  false; // Simple boolean switch used to change from one state to another.

	this.getLetter = function() { // function that shows the letter only if the boolean switch above is triggered to true. This will be triggered in the word module. If the switch remains false, the '_' will show instead.
		if (this.displayLetter) {
			return this.letter;
		} else {
			return '_';
		}
	}
}

module.exports = Letter;
