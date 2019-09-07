// Create variables========
// wins
var wins = 0;
//losses
var losses = 0;
//random Number
var randNum = 0;
// total number of user
var totalNum = 0;
// values of crystals
var crystalOneVal = 0;
var crystalTwoVal = 0;
var crystalThreeVal = 0;
var crystalFourVal = 0;

// Functions==========

// Create variable that is a function to generate random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// assign variable to that  ^

// Start game function
function gameStart() {
    randNum = getRandom(19, 120);
    console.log(randNum)
}
gameStart();