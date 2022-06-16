// Assignment code here

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numberList = ["1","2","3","4","5","6","7","8","9","0"]
var spCharList = ["!","@","#","$","%","^","&","*","(",")","-","+","~"]

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(lowerCase);
shuffle(upperCase);
shuffle(numberList);
shuffle(spCharList);

console.log(lowerCase.join(''));
console.log(upperCase.join(''));
console.log(numberList.join(''));
console.log(spCharList.join(''));

var myPw = (lowerCase.join('') + upperCase.join('') + numberList.join('') + spCharList.join(''));

console.log(myPw);

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
