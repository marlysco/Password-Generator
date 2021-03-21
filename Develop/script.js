
//Arrays and variables

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray=  ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCaractersArray = ["&","*", "%", "$", "@", "!"];
var passwordArray=[];
var numeric;
var specialCaracters;
var upperCase;
var result="";

// Prompting for options

var passwordLength= prompt("Enter the desired length, at least 8 characters and no more than 128")

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

//To collect in one array all the desired caracters, picked by the user
collect ()

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




//Functions/////////////////

//To pick the criteria(s) from the user
function criterias() {
  var upperCase=prompt("Do you want to have upper case letters");
  console.log(upperCase);
  var numeric=prompt("Do you want to include numbers");
  console.log(numeric);
  var specialCaracters=prompt("Do you want to include special caracters");
  console.log(specialCaracters);
}

//To collect in one array all the desired caracters, picked by the user
 function collect () {
    //8-111: Yes upper case, Yes numeric, Yes Special Caracters
    if (upperCase && numeric && specialCaracters) {
    var passwordArray=lowerCaseArray.concat(upperCaseArray, numericArray, specialCaractersArray);
    console.log(passwordArray);
    }
    //7-110: Yes upper case, Yes numeric, No Special Caracters
    else if (upperCase && numeric && !specialCaracters) {
      var passwordArray=lowerCaseArray.concat(upperCaseArray, numericArray);
     console.log(passwordArray);
      } 
    //6-101: Yes upper case, No numeric, Yes Special Caracters
    else if (upperCase && !numeric && specialCaracters) {
      var passwordArray=lowerCaseArray.concat(upperCaseArray, specialCaractersArray);
      console.log(passwordArray);
      }
  
    //5-100: Yes upper case, No numeric, No Special Caracters
    else if (upperCase && !numeric && !specialCaracters) {
      var passwordArray=lowerCaseArray.concat(upperCaseArray);
      console.log(passwordArray);
    }
    //4-011: No upper case, Yes numeric, Yes Special Caracters
    else if (!upperCase && numeric && specialCaracters) {
      var passwordArray=lowerCaseArray.concat(numericArray,specialCaractersArray);
      console.log(passwordArray);
    }
    //3-010: No upper case, Yes numeric, No Special Caracters
    else if (!upperCase && numeric && !specialCaracters) {
      var passwordArray=lowerCaseArray.concat(numericArray);
      console.log(passwordArray);
    }
    //1-001: No upper case, No numeric, Yes Special Caracters
    else {
      var passwordArray=lowerCaseArray.concat(specialCaractersArray);
      console.log(passwordArray);
    }
 }

 function getRndPosition() {
  return Math.floor(Math.random() * passwordArray.length)
  }

 //Function to randomly choose the password caracters form the passwordArray
  function generatePassword() {
    for (i=0; i=passwordLength; i++) {
        var randomPosition=getRndPosition();
        console.log(randomPosition);
        result.push(passwordArray[randomPosition]);
        console.log(result);
        return result;
        }
    }
    
  









