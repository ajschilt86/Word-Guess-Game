var teams = ["whitesox", "yankees", "cubs", "dodgers", "mets", "astros", "cardinals", "braves", "giants", "brewers", "nationals", "phillies", "indians",
    "diamondbacks", "orioles", "tigers", "rangers", "twins", "pirates", "rockies", "reds", "padres", "athletics", "royals", "rays", "marlins", "giants", "redsox", "mariners", "angels", "bluejays"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;           //how many wins//
var losses = 0;         //how many loses//
var guesses = 10;       //guesses left//
var randWord = "";      //random word picked by computer//
var blanksAndGuess = [];    //blanksAndGuess//
var currentWord = [];   //word that was chosen//
var wrongLetters = [];  //array with wrong guesses//
var lettersToWord = [];
var numBlanks = 0;


//choose a random team//
randWord = [Math.floor(Math.random() * teams.length)];
console.log(randWord);
//turn words into separate letters//


//get the number of underscores per letter of the team//

var randomChoice = teams[randWord];
console.log(randomChoice);
for (var i = 0; i < randomChoice.length; i++) {
    blanksAndGuess.push(" _ ");
    //document.getElementById("spaces").innerHTML = blanksAndGuess;//

    console.log(blanksAndGuess);
}




for (var i = 0; i < randomChoice.length; i++) {
    currentWord.push(randomChoice[i].charAt(0))
    console.log(currentWord);
}



document.addEventListener('keydown', function (event) {
    var userGuess = event.key;
    console.log(currentWord.includes(userGuess));
    wrongLetters.push(userGuess);


    if (currentWord.includes(userGuess) === true) {
        console.log(userGuess);
        guesses = 10;
        wrongLetters.length = 0;
        randWord = teams[Math.floor(Math.random() * teams.length)];
        

    } else {
        guesses--;        
        console.log(userGuess);
    }

    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === event.key) {
            blanksAndGuess[i] = event.key;
            console.log(blanksAndGuess);
            document.getElementById("spaces").innerHTML = "New Word " + blanksAndGuess;
        }
    }

    if (guesses === 0) {
        console.log("game over");
        losses++;
        guesses = 10;
        wrongLetters = [];
        randWord = teams[Math.floor(Math.random() * teams.length)]
        document.getElementById("spaces").innerHTML = "New Word " + blanksAndGuess;
        console.log(randWord);
    }
})

document.getElementById("guesses").innerHTML = "Gueses left: " + guesses;
document.getElementById("lettersGuessed").innerHTML = "Guessed letters: " + wrongLetters;
document.getElementById("spaces").innerHTML = "New Word " + blanksAndGuess;
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "losses: " + losses;










/* for (var i = 0; i < randomChoice.length; i++) {
    console.log(" _");
}
*/








    // create array of possible words
    // array of all letters// 
    // pick random word
    //show how many letters are in the word 
    //for loop --> print word.length and underscores
    //Check if guess exists in word
    //.indexOf() !== -1 then its in the word 
    //var blankSpace = words[i].length
    //show guessed letters with array
    //give the hangman guesses(lives), and create a mechanism to take them away
    //Finish when the player guessed the word
    //create game over/ new game screen












