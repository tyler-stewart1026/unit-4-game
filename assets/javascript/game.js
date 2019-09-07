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

// Start game function
function gameStart() {
    // assign random number. 
    randNum = getRandom(19, 120);
    console.log(randNum)
    // assign each cryssle a number. 
    crystalOneVal = getRandom(1, 12);
    crystalTwoVal = getRandom(1, 12);
    crystalThreeVal = getRandom(1, 12);
    crystalFourVal = getRandom(1, 12);
    console.log("cryssle 1: " + crystalOneVal + ", Cryssle 2: " + crystalTwoVal + ", cryssle 3: " + crystalThreeVal + ",  cryssle 4: " + crystalFourVal);
    //set total number to 0 (possible act as a reset?)
    totalNum = 0;
    $("#randomNumber").text(randNum);
};
gameStart();