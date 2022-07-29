// Assignment code here
var charArray = [];
var length = 8;
var lowerArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var upperArray = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var spArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {
    var newPass = generatePassword();
    passwordText.value = newPass;
  }
}
function generatePassword() {
  var password = "";
  for (let index = 0; index < length; index++) {
    var randomIndex = Math.floor(Math.random() * charArray.length);
    password = password + charArray[randomIndex]
  }
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePrompts() {
  charArray = [];
  length = parseInt(prompt("How many characters?"))
  if (length < 8 || length > 128) {
    alert("Password musy be between 8 and 128 characters!");
    return;
  }

  var includeNumbers = confirm("Include numbers?")

  if (includeNumbers) {
    charArray = charArray.concat(numArray);
  }

  var includeLowercase = confirm("Include lowercase letters?")

  if (includeLowercase) {
    charArray = charArray.concat(lowerArray);
  }

  var includeUpppercase = confirm("Include uppercase lettters?")

  if (includeUpppercase) {

    charArray = charArray.concat(upperArray);
  }

  var includeSpecial = confirm("Include special character?")
  if (includeSpecial) {
    charArray = charArray.concat(spArray);
  }
}
