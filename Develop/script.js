// Assignment code her
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberList = ["1","2","3","4","5","6","7","8","9","0"];
var spCharList = ["!","@","#","$","%","^","&","*","(",")","-","+","~"];
var count = 5;

function getLength() {
  var pwLength = window.prompt("Please choose the length of your new password: Enter a number between 8 & 128.");
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
  
  var lowerC = window.confirm("Would you like to include lower case letters?");

  if (lowerC) {
    shuffle(lowerCase);
    console.log(lowerCase);
    function counter () {
      count = count - 1;
    }
    counter();
    console.log(count);
  }
  else {
    lowerCase = [""];
    console.log(lowerCase);
  }

  var upperC = window.confirm("Would you like to include upper case letters?");

  if(upperC) {
    shuffle(upperCase);
    console.log(upperCase);
    function counter () {
      count = count - 1;
    }
    counter();
    console.log(count);
  }
  else {
    upperCase = [""];
  }
  
  var numberL = window.confirm("Would you like to include numbers?");
 
  if (numberL) {
    shuffle(numberList);
    console.log(numberList);
    function counter () {
      count = count - 1;
    }
    counter();
    console.log(count);
  }
  else {
    numberList = [""];
  }
  
  var spCharL = window.confirm("Would you like to confirm special characters (such as '!', '#', '%', etc)?");

  if(spCharL) {
    shuffle(spCharList);
    console.log(spCharList);
    function counter () {
      count = count - 1;
    }
    counter();
    console.log(count);
  }
  else {
    spCharList = [""];
  }

  var myPw = (lowerCase.join('') + upperCase.join('') + numberList.join('') + spCharList.join(''));

  shuffle(myPw);
  console.log(myPw);

  function counter2() {
    if (pwLong >= myPw.length) {
      count = (pwLong * count) * .25;
      myPw = myPw.repeat(count);
    }
    else {
      count = "";
    }
  }

  counter2();
  console.log(count);
  console.log(myPw);

  function generateFinal() {
    let finalPw = "";
    for ( let i = 0; i < pwLong; i++) {
      finalPw += myPw.charAt(Math.floor(Math.random() * pwLong));
    }
    shuffle(finalPw);
    console.log(finalPw);
    return finalPw;
  };
  generateFinal();
};

getLength();

//Fisher-Yates Shuffle function (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

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
