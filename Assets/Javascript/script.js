// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "1234567890".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialchar = "`~!@#$%^&*()-_=+".split("");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to prompt user choices

function generatePassword () {
    var passwordLength = prompt("Enter a number between 8-128");   
    var password = "";
    var passwordSelection = []

    if (passwordLength < 8) {
        alert("number is too small");
        return "Click Generate Password Button to Try Again";
    }
    if (passwordLength > 128) {
        alert("number is too large");
        return "Click Generate Password Button to Try Again";
    }
    if (isNaN (passwordLength)) {
        alert("must be a number between 8-128");
        return "Click Generate Password Button to Try Again";
    }
    var lowercaseChoice = confirm("Include lowercase letters?")
    if (lowercaseChoice === true) {
        passwordSelection = [...passwordSelection, ...lowercase];
    } else {
        passwordSelection = [...passwordSelection]
    }

    var uppercaseChoice = confirm("Include uppercase letters?")
    if (uppercaseChoice === true) {
        passwordSelection = [...passwordSelection, ...uppercase];
    } else {
        passwordSelection = [...passwordSelection]
    }


    var numbersChoice = confirm("Include numbers?")
    if (numbersChoice === true) {
        passwordSelection = [...passwordSelection, ...numbers];
    } else {
        passwordSelection = [...passwordSelection]
    }

    var specialcharChoice = confirm("Include special characters?")
    if (specialcharChoice === true) {
        passwordSelection = [...passwordSelection, ...specialchar];
    } else {
        passwordSelection = [...passwordSelection]
    }


    for (var i=0; i < passwordLength; i++) {
        password += passwordSelection[(Math.floor(Math.random() * passwordSelection.length))]
        
    }

    return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

