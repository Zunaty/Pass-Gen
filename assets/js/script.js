var passLen;
// Array holding the alphabet
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Array holding all possible symbols 
var symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
// Array holding all possible numbers
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// This will combine the other arrays to pick randomly from
var passArray = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// This function will ask for a number between 8 and 128 and return the number wherever it is called
function passLength() {
  var x = prompt("How long would you like your password to be?\nPlease use a number between 8 and 128");
  if(x >= 8 && x <= 128){
    return passLen = x;
  } else {
    alert("Please use a number between 8 and 128");
    passLength();
  }
};

// This function will ask the user if they want to use lower case
function passLower() {
  var x = confirm("Would you like to have lower case letters in your password?");
  if(x === true) {
    var lower = alphabet.map(letters => letters.toLowerCase());
    passArray = passArray.concat(lower)
    console.log(passArray)
  }
};

// This function will ask the user if they want to use upper case
function passUpper() {
  var x = confirm("Would you like to have UPPER CASE letters in your password?");
  if(x === true) {
    passArray = passArray.concat(alphabet)
    console.log(passArray)
  }
};

// This function will ask the user if they want to use numbers
function passNum() {
  var x = confirm("Would you like to have numbers in your password?");
  if(x === true) {
    passArray = passArray.concat(numbers)
    console.log(passArray)
  }
};

// This function will ask the user if they want to use symbols
function passSym() {
  var x = confirm("Would you like to have symbols in your password?");
  if(x === true) {
    passArray = passArray.concat(symbol)
    console.log(passArray)
  }
};

// This function will create the password with or without some characteristics
function generatePassword() {
  var x = "";
  passLength();
  passLower();
  passUpper();
  passNum();
  passSym();
  
  while(x.length < passLen) {
    x += passArray(Math.ceil(Math.random() * passArray.length))
  }
  return x;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
