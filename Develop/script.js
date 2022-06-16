// Assignment code here
function getLength() {
  var pwLength = window.prompt("Please choose the length of your new password: Enter a number between 1 & 128.");
  
  if (pwLength < "8" && pwLength > "128") {
    window.alert("You need to pick a number between 8 & 128.");
    return getLength();
  }
  console.log(pwLength);

}

getLength();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
