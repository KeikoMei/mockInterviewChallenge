/*
In a language of your choice, write a higher/lower game that satisfies the following criteria: 
•	Generates a random number. 
•	Takes in a guess. 
•	Returns a string with the guess and whether that guess is lower or higher than the random number. E.g., “You answered 9. The correct answer is higher.” 
•	If the guess matches the random number, then return a string which confirms this. E.g., “You answered 9. This is the correct answer!” 
This challenge (deliberately) does not give any guidance about ranges, input validation, presentation etc., so you are also required to explain any assumptions that you have made. This can be done using comments in the code or in a readme file, or both. 
*/

//Function to generate and return a random number
function generateRandomNumber ()
{
    let randomNumber=0; //Create a variable to store the number and initialize to 0

    //To generate the random number, I use the javascript function Math.random(). This generates a number between 0 and 1
    //I use a range between 0 and 10 to make at least a bit challenging, but easy enough to test
    //Since Math.random() generates a decimal number, I use Math.floor() to make it an integer
    randomNumber = Math.floor(Math.random() * 11); // Random integer between 0 and 11
    
    return randomNumber;
}

//Function to take the player's guess
function takePlayerGuess ()
{
    //Generates a prompt for the user input and returns the input
    let playerGuess = prompt("What number am I thinking of?");
    
    //To do: add a validation rule so the user only can enter numbers
    return playerGuess;

    
}

//function to determine if the player's guess is lower, higher or the same than the machine generated number
function isItlowerOrHiguer (numberToGuess, playerGuess)
{
    //if the guess is higher
    //return (`You answered ${playerGuess}. The correct answer is higher.`);

    //if the guess is lower
    //return (`You answered ${playerGuess}. The correct answer is lower.`);

    //if the guess is correct
    //return (`You answered ${playerGuess}. This is the correct answer.`);

}

//function to play the game
function playGame ()
{
    let numberToGuess = generateRandomNumber ();
    let playerGuess = takePlayerGuess ();
   
    console.log (isItlowerOrHiguer (numberToGuess, playerGuess));
}

//executes the playGame function
//playGame ();
console.log (generateRandomNumber ()); //debug to see if it works correctly
console.log(takePlayerGuess ()); //debug to see if it works correctly