
//Arrays and variables

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray=  ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCaractersArray = ["&","*", "%", "$", "@", "!"];
var passwordArray=[];
var numeric;
var specialCaracters;
var upperCase;
var passwordLength;
var userPassword="";


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordLength= prompt("Enter the desired length, at least 8 characters and no more than 128")
  console.log(passwordLength);

  //Validating password length and user criterias
  while (passwordLength <8 || passwordLength >= 128) {
    alert("Please choose at least 8 characters and no more than 128");
    return;
  }

   //To pick the criteria(s) from the user
  var upperCase=confirm("Do you want to have upper case letters?");
  console.log(upperCase);
  var numeric=confirm("Do you want to include numbers?");
  console.log(numeric);
  var specialCaracters=confirm("Do you want to include special caracters?");
  console.log(specialCaracters);
 
  //Validating the user picked at least one criteria
  if (!numeric && !specialCaracters && !upperCase) {
    alert("You must choose at least one criteria");
    return;
   }

 else {
   //111: Yes upper case, Yes numeric, Yes Special Caracters
  if (upperCase && numeric && specialCaracters) {
    var passwordArray=lowerCaseArray.concat(upperCaseArray, numericArray, specialCaractersArray);
    console.log(passwordArray);
    }
    //110: Yes upper case, Yes numeric, No Special Caracters
    else if (upperCase && numeric && !specialCaracters) {
      var passwordArray=lowerCaseArray.concat(upperCaseArray, numericArray);
     console.log(passwordArray);
      } 
    //101: Yes upper case, No numeric, Yes Special Caracters
    else if (upperCase && !numeric && specialCaracters) {
      var passwordArray=lowerCaseArray.concat(upperCaseArray, specialCaractersArray);
      console.log(passwordArray);
      }
    //100: Yes upper case, No numeric, No Special Caracters
    else if (upperCase && !numeric && !specialCaracters) {
      var passwordArray=lowerCaseArray.concat(upperCaseArray);
      console.log(passwordArray);
    }
    //011: No upper case, Yes numeric, Yes Special Caracters
    else if (!upperCase && numeric && specialCaracters) {
      var passwordArray=lowerCaseArray.concat(numericArray,specialCaractersArray);
      console.log(passwordArray);
    }
    //010: No upper case, Yes numeric, No Special Caracters
    else if (!upperCase && numeric && !specialCaracters) {
      var passwordArray=lowerCaseArray.concat(numericArray);
      console.log(passwordArray);
    }
    //001: No upper case, No numeric, Yes Special Caracters
    else {
      var passwordArray=lowerCaseArray.concat(specialCaractersArray);
      console.log(passwordArray);
    } 
  }
  
   console.log(passwordArray);

   for (var i=0; i < passwordLength; i++) {
    var randomPosition = Math.floor(Math.random()*passwordArray.length);
    console.log(randomPosition);
        console.log(randomPosition);  
    console.log(randomPosition);
    userPassword += String.fromCharCode(randomPosition);
    console.log(userPassword);
    }

   var passwordText = document.querySelector("#password");
   passwordText.value = userPassword;
  }

   // Add event listener to generate button
   generateBtn.addEventListener("click", writePassword);


