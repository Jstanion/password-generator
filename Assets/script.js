/*WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria*/
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  /*WHEN the password is generated
  THEN the password is either displayed in an alert or written to the page*/
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword() {

  //Create prompt for password length of at least 8 characters and no more than 128 characters
  let passwordLength = prompt("Please select a desired password length between 8 and 128 characters:");

  //Conditional statement needed to verify the correct length is provided -> error message - use alert() method -> end function and return to initial prompt?
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("You must select a number between 8 and 128!");
  }

  //Create prompts for character types (uppercase, lowercase, numbers, special characters) included in password -> use confirm() method for boolean values
  let upperCaseSelection = confirm("Would you like to include uppercase letters?");
  let lowerCaseSelection = confirm("Would you like to include lowercase letters?");
  let numberSelection = confirm("Would you like to include numbers?");
  let specialCharacterSelection = confirm("Would you like to include special characters?");
  
  //Create a conditional statement that verifies at least one character type is selected -> error message - use alert() method -> end function if acceptance criteria isn't met
  if (upperCaseSelection === false && lowerCaseSelection === false && numberSelection === false && specialCharacterSelection === false) {
    alert("You must choose at least one character type!");
  }
}
/*WHEN all prompts are answered
THEN a password is generated that matches the selected criteria*/
  //List all characters available for function to choose from -> a string or an array?

  //Character types combined randomly to create one password value -> combine with +? -> use Math.floor(Math.random)

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
