// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to prompt user choices

function generatePassword () {
    var passwordLength = prompt("Enter a number between 8-128"); 
    if (passwordLength < 8) {
        alert("number is too small");
        return;
    }
    if (passwordLength > 128) {
        alert("number is too large");
        return;
    }
    var lowercaseChoice = confirm("Include lowercase letters?")

    var uppercaseChoice = confirm("Include uppercase letters?")

    var numbersChoice = confirm("Include numbers?")
    
    var specialcharChoice = confirm("Include special characters?")
    


}
