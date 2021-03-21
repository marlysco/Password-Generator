
//Arrays and variables

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray=  ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCaractersArray = ["&","*", "%", "$", "@", "!"];
var passwordArray=[];
var numeric;
var specialCaracters;
var upperCase;
var result=[];

// Prompting for options

var passwordLength= prompt("Enter the desired length, at least 8 characters and no more than 128")
console.log(passwordLength);

//Validating password length

while (passwordLength <8 || passwordLength >= 128) {
  alert("Please choose at least 8 characters and no more than 128");
  var passwordLength= prompt("Enter the desired length, at least 8 characters and no more than 128")
}

//To pick the criteria(s) from the user
criterias();

//Validating the user picked at least one criteria
if (!numeric && !specialCaracters && !upperCase) {
  alert("You must choose at least one criteria");
  criterias();
}
else {
  //To collect in one array all the desired caracters, picked by the user
collect ()
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

//Functions

//To pick the criteria(s) from the user
function criterias() {
  var upperCase=confirm("Do you want to have upper case letters");
  console.log(upperCase);
  var numeric=confirm("Do you want to include numbers");
  console.log(numeric);
  var specialCaracters=confirm("Do you want to include special caracters");
  console.log(specialCaracters);
}

//To collect in one array all the desired caracters, picked by the user
 function collect () {
    
 }

 function getRndPosition() {
  return Math.floor(Math.random() * passwordArray.length);
  }

 //Function to randomly choose the password caracters form the passwordArray
  function generatePassword() {
    for (i=0; i=passwordLength; i++) {
        var randomPosition=getRndPosition();
        console.log(randomPosition);
        newresult=result.push(passwordArray[randomPosition]);
        console.log(newresult);
        return newresult;
        }
    }
    
  









