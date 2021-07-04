// This variable will hold how long the password will be
var passLen;

// These variables will hold a true or false
var lowerConfirm;
var upperConfirm;
var numConfirm;
var symConfirm;

// These variables hold true or false to ensure the password has at least one of each character
var lowerCheck;
var upperCheck;
var numCheck;
var symCheck;

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
  }
  return lowerConfirm = x;
};

// This function will ask the user if they want to use upper case
function passUpper() {
  var x = confirm("Would you like to have UPPER CASE letters in your password?");
  if(x === true) {
    passArray = passArray.concat(alphabet)
  }
  return upperConfirm = x;
};

// This function will ask the user if they want to use numbers
function passNum() {
  var x = confirm("Would you like to have numbers in your password?");
  if(x === true) {
    passArray = passArray.concat(numbers)
  }
  return numConfirm = x;
};

// This function will ask the user if they want to use symbols
function passSym() {
  var x = confirm("Would you like to have symbols in your password?");
  if(x === true) {
    passArray = passArray.concat(symbol)
  }
  return symConfirm = x;
};

// This function will check to make sure that at least one option is selected
function falseChecker() {
  if(lowerConfirm === false && upperConfirm === false && numConfirm === false && symConfirm === false) {
    alert("Please pick at least one set of characters to use, try again");
    generatePassword();
  }
};

// Checking whether an option was selected, and then ensuring the string has that character in it
function trueChecker(data) {
  if(lowerConfirm === true) {
    return lowerCheck = data.includes("abcdefghijklmnopqrstuvwxyz");
  }
  if(upperConfirm === true) {
    return upperCheck = data.includes("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if(numConfirm === true) {
    return numCheck = data.includes("1234567890");
  }
  if(symConfirm === true) {
    return symCheck = data.includes("!@#$%^&*()");
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
  falseChecker();

  // This creates a random password with every array that was added to passArray
  // depending on which ones they wanted to include
  while(x.length < passLen) {
    x += passArray[Math.floor(Math.random() * passArray.length)];
  };

  trueChecker(x);

  // This ensures that when all four are selected that one of each character type shows up in the password
  if(lowerConfirm === true && upperConfirm === true && numConfirm === true && symConfirm === true){
    while(lowerCheck === false && upperCheck === false && numCheck === false && symCheck === false) {
      x += passArray[Math.floor(Math.random() * passArray.length)];
    }
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
