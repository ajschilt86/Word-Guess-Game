var teams = ["white sox", "yankees", "cubs", "dodgers", "mets", "astros", "cardinals", "braves", "giants", "brewers", "nationals", "phillies", "indians",
    "diamondbacks", "orioles", "tigers", "rangers", "twins", "pirates", "rockies", "reds", "padres", "athletics", "royals", "rays", "marlins", "giants", "red sox", "mariners", "angels", "blue jays"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;           //how many wins//
var losses = 0;         //how many loses//
var guesses = 10;       //guesses left//
var randWord = "";      //random word picked by computer//
var underScore = [];    //underscore//
var currentWord = [];   //word that was chosen//
var wrongLetters = [];  //array with wrong guesses//
var lettersToWord = [];
var numUnderScore = 0;

var randWord = teams[Math.floor(Math.random() * teams.length)];
console.log(randWord);
lettersToWord = randWord.split('');
console.log(lettersToWord);

numUnderScore = lettersToWord.length;

var randomChoice = teams[randWord];
console.log(randomChoice);


for (var j = 0; j < randomChoice.length; j++) {
    underScore.push("_ ");
    //document.getElementById("spaces").innerHTML = underScore;//
    
    console.log(underScore);
}



/*
for (var i = 0; i < teams.length; i++) {
    currentWord.push(randomChoice[i].charAt(0))
    console.log(currentWord);
}
*/


document.addEventListener('keydown', function (event) {
    var userGuess = event.key;

    console.log(currentWord.includes(userGuess))
    if (currentWord.includes(userGuess) === true) {
        console.log(userGues);
    } else {
        console.log(userGuess);
        guesses--;
    }

    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === event.key) {
            underScore[i] = event.key;
            console.log(underScore);
        }
    }
})













/* for (var i = 0; i < randomChoice.length; i++) {
    console.log(" _");
}
*/








    // create array of possible words
    // pick random word
    //show how many letters are in the word 
    //for loop --> print word.length underscores
    //Check if guess exists in word
    // .indexOf() !== -1 then its in the word 
    //var blankSpace = words[i].length
    // show guessed letters with array
    // give the hangman lives, and create a mechanism to take them away
    //Finish when the player guessed the word
    // create game over/ new game screen












