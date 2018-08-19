// var exports = module.exports = {};
var wordBank = [
	'Spoils',
	'Snaffle',
	'Varix',
	'Photozincography',
	'Subtympanitic',
	'Reemigrating',
	'Overplain',
	'Untopographical',
	'Overstudied',
	'Offense',
	'Reexposure',
	'Semiministerial',
	'Unrebuffable',
	'Preternaturality',
	'Unicorn',
	'Monaca',
	'Euphonic',
	'Drillmaster',
	'Autopsic',
	'Heritably'
];

module.exports.getRandomWord = function () { // Takes the quantity of words in the wordBank array, randomizes that number by multiplying it by the math.random function, and then takes the array index corresponding to said number, in order to pick the word corresponding to this index.
	var index = parseInt(Math.random() * (wordBank.length));
	return wordBank[index];
}