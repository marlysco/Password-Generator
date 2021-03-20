
//Arrays

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray=  ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCaractersArray = ["&","*", "%", "$", "@", "!"];
var password=[];

// Prompting for options

var passwordLength= prompt("Enter the desired length, at least 8 characters and no more than 128")

//Validating password length

while (passwordLength <= 8 || passwordLength >= 128) {
  alert("Please choose at least 8 characters and no more than 128");
  var passwordLength= prompt("Enter the desired length, at least 8 characters and no more than 128")
}

var upperCase=prompt("Do you want to have upper case letters");
var numeric=prompt("Do you want to include numbers");
var specialCaracters=prompt("Do you want to include special caracters");

if  (upperCase=true) {
  var password=
}
















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
