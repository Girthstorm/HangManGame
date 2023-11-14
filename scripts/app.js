//Someone thinks of a word and we keep it secret from the other players
//We will display a series of underscores depending on the length of the word
//Each turn the player will guess 1 letter from the word.
//If guess is correct wer will display the letter in the blank spot.
//If incorrect we draw a piece of the hangman or tell the user they have x amount of guesses left
//Add incorrect guess to a dive
//Start button 
//Replay button

//We'll need an Id for:
//Start Button
//Replay Button
//SecretWord
//Wrong Guesses
//hangman
//Guess / Input

//Id section

let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");

let secretWord = document.getElementById("secretWord");
let wrongGuesses = document.getElementById("wrongGuesses");
let hangMan = document.getElementById("hangMan");
let userInput = document.getElementById("userInput");

//Variables
//Random word will be for our API call
//Wrong guess will be the user's incorrect Input
//Displayed Word will be for their correct Input.
let randomWord ="";
let wrongGuess ="";
let displayedWord = [];

let guesses = 0;
let maxGuesses = 5;

startBtn.addEventListener('click', function(e){
    //Call our API function
    ApiCall();
})

function ApiCall(){
    //We initiate the fetch request from our random word generator
    fetch('https://random-word-api.herokuapp.com/word')
        .then((response) => {
            //We're going to use the .json() method to parse the response into json data
            return response.json();
        })
            .then((data) => {
                console.log(data[0]);
                startGame(data[0]);
            })
}

function startGame(word){
    randomWord = word;

    //now we have to change our displayed to have _ for the length of our random word

    for(let i = 0; i < randomWord.length; i++){
        displayedWord[i] = " _ ";
    }
    //We will update our "Game state"
    updateGameState();
}

function updateGameState(){
    secretWord.textContent = displayedWord.join(" ");

    hangMan.textContent = `Guesses Left: ${guesses} / ${maxGuesses}`;
}