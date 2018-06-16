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
var guessed = [];

function reset() {
    guessed = []
    blanksAndGuess = [];    //blanksAndGuess//
    currentWord = [];   //word that was chosen//
    wrongLetters = [];  //array with wrong guesses//
    lettersToWord = [];
    var numBlanks = 0;
    guesses = 10;
    randWord = [Math.floor(Math.random() * teams.length)];
    console.log(randWord);
    var randomChoice = teams[randWord];
    console.log(randomChoice);
    for (var i = 0; i < randomChoice.length; i++) {
        blanksAndGuess.push(" _ ");
    }

    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (var i = 0; i < randomChoice.length; i++) {
        currentWord.push(randomChoice[i].charAt(0))
    }
}


//choose a random team//
randWord = [Math.floor(Math.random() * teams.length)];
console.log(randWord);

var randomChoice = teams[randWord];
console.log(randomChoice);
for (var i = 0; i < randomChoice.length; i++) {
    blanksAndGuess.push(" _ ");

}

console.log(blanksAndGuess);


for (var i = 0; i < randomChoice.length; i++) {
    currentWord.push(randomChoice[i].charAt(0))

}
console.log(currentWord);


document.addEventListener('keydown', function (event) {
    var userGuess = event.key;
    console.log(currentWord.includes(userGuess));
    wrongLetters.push(userGuess);

    if (guessed.indexOf(userGuess) === -1) {
        guessed.push(userGuess);

        if (currentWord.includes(userGuess) === true) {
            console.log(userGuess);
            wrongLetters.length = 0;
            randWord = [Math.floor(Math.random() * teams.length)];
        }

        else {
            guesses--;
            console.log(userGuess);
            document.getElementById("lettersGuessed").innerHTML = "Guessed letters: " + wrongLetters;
            document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
        }


        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === event.key) {
                blanksAndGuess[i] = event.key;
                console.log(blanksAndGuess);
                document.getElementById("spaces").innerHTML = ">" + blanksAndGuess.join(" ") + "<";
            }
        }

        if (guesses === 0) {
            console.log("game over");
            losses++;
            document.getElementById("spaces").innerHTML = ">" + blanksAndGuess.join(" ") + "<";
            document.getElementById("losses").innerHTML = "losses: " + losses;
            console.log(randWord);
            reset();
        }
        rendGame();
    }

    else {
        return;
    }

    if (blanksAndGuess.indexOf(" _ ") === -1) {
        wins++;
        reset();
        rendGame();
    }
})




function rendGame() {
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
    document.getElementById("lettersGuessed").innerHTML = "Guessed letters: " + guessed;
    document.getElementById("spaces").innerHTML = ">" + blanksAndGuess.join(" ") + "<";
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;

}


rendGame();






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












