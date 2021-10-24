// Assignment code here
const selectedCharacters = [];
const letters = "abcdefghijklmnopqrstuvwxyz";
const capLetters = "ABCDEFGHIJKLMOPWRSTUVWXYZ";

//https://stackoverflow.com/questions/5754712/add-characters-to-a-string-in-javascript

//object to store parameters
const passParameters = {
  ///change all instances of this length!!
  quantity: "",
  uppercase: "",
  specialCharacters: "",
};

//Ask about password requirements
const passPrompts = function () {
  let numCharacters = window.prompt(
    "How many characters should your password include, between 8 and 128?"
  );
  //Check if response is valid, add or is not number
  while (numCharacters < 8 || numCharacters > 128) {
    window.alert("Number must be between 8 and 128");
    numCharacters = window.prompt(
      "How many characters should your password include, between 8 and 128?"
    );
  }

  //Update passParameters
  passParameters.quantity = numCharacters;

  ///test section
  //assign response to hasUpperCase
  const hasUppercase = window.prompt("Includes uppercase, true or false");

  // passParameters.uppercase = hasUppercase;
  // if (hasUppercase) {
  //   selectedCharacters.push(capLetters);
  //   selectedCharacters.toString();
  // }

  ///test section
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
