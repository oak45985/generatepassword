// Assignment code here
var lc = "abcdefghijklmnopqrstuvwxyz";
var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sc = "!@#$%^&*()+=";
var nm = "123456790";

function getLength() {
  var pwLength = window.prompt("Please choose the length of your new password: Enter a number between 1 & 128.");
  // debugger;
  while (pwLength === "" || pwLength === null) {
    return getLength();
  }
  var pwLong = parseInt(pwLength);

  if (pwLong < 8 || pwLong > 128) {
    window.alert("You need to pick a number between 8 & 128.");
    return getLength();
  }
  console.log(pwLong);

  var lowerCase = window.confirm("Would you like to include lower case letters?");

  if (lowerCase) {
    lowerCase = lc;
  }
  else {
    lowerCase = "";
  }

  var upperCase = window.confirm("Would you like to include upper case letters?");

  if(upperCase) {
    upperCase = uc;
  }
  else {
    upperCase = "";
  }

  var numerals = window.confirm("Would you like to include numbers?");

  if (numerals) {
    numerals = nm;
  }
  else {
    numerals = "";
  }
  
  var spChar = window.confirm("Would you like to confirm special characters (such as '!', '#', '%', etc)?");

  if(spChar) {
    spChar = sc;
  }
  else {
    spChar = "";
  }

  var myPw = (lowerCase + upperCase + numerals + spChar);

  console.log(myPw);

  function generateThatBitch() {
    var finalPw = myPw;

    return finalPw[Math.floor(Math.random() * pwLong)];
  }
  console.log(generateThatBitch());
};

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
