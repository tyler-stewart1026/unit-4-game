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
var crystal = {
    one:
    {
      name: "Blue",
      value: 0
    },
    two:
    {
      name: "Green",
      value: 0
    },
    three:
    {
      name: "Red",
      value: 0
    },
    four:
    {
      name: "Yellow",
      value: 0
    }
  };
// Functions==========

// Create variable that is a function to generate random numbers
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Start game function ----- this might also work as a reset. 
var gameStart = function() {
    // assign random number. 
    randNum = getRandom(19, 120);
    console.log(randNum)
    // assign each cryssle a number. 
    crystal.one.value = getRandom(1, 12);
    crystal.two.value = getRandom(1, 12);
    crystal.three.value = getRandom(1, 12);
    crystal.four.value = getRandom(1, 12);
    console.log("cryssle 1: " + crystal.one.value + ", Cryssle 2: " + crystal.two.value + ", cryssle 3: " + crystal.three.value + ",  cryssle 4: " + crystal.four.value);
    //set total number to 0 (possible act as a reset?)
    totalNum = 0;
    $(".targetnumber-body").text(randNum);
    $(".totalscore-body").text(totalNum);
};

// Check if user won or lost and reset game
var checkWin = function () {

    // Check if total number is larger than random number
    if (totalNum > randNum) {
        swal("You lost!", {
            button: false,
          });
        console.log("You Lost");

        // Add to losses
        losses++;

        // Change Loss Count 
        $(".losses-body").text(losses);

        // Restart the game
        gameStart();
    }

    else if (totalNum === randNum) {
        swal("You win!", {
            button: false,
          });
        console.log("You Won!");

        // Add to wins
        wins++;

        // Change Win Count HTML
        $(".wins-body").text(wins);

        // Restart the game
        gameStart();
    }

};

// Adding a function for the crystals to be clicked and add number
var values = function (crystalClick) {

    // change totalNum
    totalNum += crystalClick.value;

    $(".totalscore-body").text(totalNum);

    // call the check win 
    checkWin();

    console.log("Your score so far: " + totalNum);
};

// Main======

//Main application

gameStart();

$(".crystal1").click(function () {
    values(crystal.one);
    console.log(crystal.one);
});

$(".crystal2").click(function () {
    values(crystal.two);
});

$(".crystal3").click(function () {
    values(crystal.three);
});

$(".crystal4").click(function () {
    values(crystal.four);
});
