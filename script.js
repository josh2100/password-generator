// Assignment code here
const selectedCharacters = [];
const letters = "abcdefghijklmnopqrstuvwxyz";
const capLetters = "ABCDEFGHIJKLMOPWRSTUVWXYZ";

//object to store parameters
const passParameters = {
  ///change all instances of this length!!
  quantity: "",
  uppercase: "",
};

//ask how many characters you would like
const passPrompts = function () {
  const numCharacters = window.prompt("numCharacters, between 8 and 128");
  passParameters.quantity = numCharacters;
  let hasUppercase = window.prompt("Includes uppercase, true or false");
  passParameters.uppercase = hasUppercase;
  if (hasUppercase) {
    selectedCharacters.push(capLetters);
    selectedCharacters.toString();
  }
};

///add parameters so it can be passed through
const generatePassword = function () {
  passPrompts();

  const parameterArray = [];
  parameterArray[0] = passParameters.quantity;
  parameterArray[1] = passParameters.uppercase;

  ///magic
  const keyword = [];

  for (var i = 0; i < passParameters.quantity; i++) {
    keyword.push(letters.charAt(Math.floor(Math.random() * letters.length)));
  }

  //magic

  //this is a test, will actuall return password based on parameters
  // return parameterArray;
  // keyword = keyword.toString();
  let string = keyword.join("");
  return string;
};

// no touchy
//
//
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
