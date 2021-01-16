// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Library
const lowerCaseLettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCaseLettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numericalCharsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const specialCharsArr = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"]

// More variables
var 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Function to prompt user to enter password requirements
function generatePassword() {
  var passwordSelection = []

  // User provides desired length between 8-128
  var passwordLength = prompt("Enter a length for your password between 8-128 characters.");

  if (passwordLength < 8) {
    alert("Please choose a length between 8-128 characters")

  }

  // Prompt if user would like to include lowercase letters
  var includeLowerCase = confirm("Include lowercase letters?");

  // Prompt if user would like to include uppercase letters
  var includeUpperCase = confirm("Include uppercase letters?");

  // Prompt if user would like to include numbers
  var includeNumbers = confirm("Include numbers?");

  // Prompt if user would like to include special characters 
  var includeSpecial = confirm("Include any special characters?"); 

  if (passwordLength < 8) {
    alert("Please choose yes for at least one of the options.")
  }

  return "string"

}

// To Do
// Do if else in generatePassword function to make sure they don't choose false on all queries. 
// Convert number selection to actual number and confirm it is in correct range. 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Getting started ideas from Dan
// generating a set length password from 1 array and console log it.

// for loop 
// for (var i=0; i<passwordLength; i++) {
//   //produce a random lowercase letter 8 times


// Math.floor(math.random * passwordLength)
// }

