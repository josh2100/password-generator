var selectedCharacters = [""];
var lowLetters = ["a", "b", "c"];
var capLetters = ["A", "B", "C"];
var symbols = ["!", "@", "#"];
const numbers = ["1", "2", "3", "4", "5"];

var passParameters = {
  quantity: "",
  lowercase: "",
  uppercase: "",
  numeric: "",
  special: "",
};

var randomCharacter = function () {
  //selects a character from selectedCharacters
  var selectCharacter =
    selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
  return selectCharacter;
};

var addEachCharacter = function (array1) {
  for (var i = 0; i < array1.length; i++) {
    selectedCharacters.push(array1[i]);
  }
};

//Ask about password requirements
var passPrompts = function () {
  // Reset selected characters for additional clicks
  selectedCharacters = [""];

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
  //Update passParameters with provided number
  passParameters.quantity = numCharacters;

  // Check if user wants lowercase numbers
  var hasLowercase = window.confirm(
    "Do you want lowercase characters in your password?"
  );
  passParameters.uppercase = hasLowercase;
  if (hasLowercase) {
    addEachCharacter(lowLetters);
  }

  // Check if user wants uppercase characters
  var hasUppercase = window.confirm(
    "Do you want uppercase characters in your password?"
  );
  passParameters.uppercase = hasUppercase;
  if (hasUppercase) {
    addEachCharacter(capLetters);
  }

  // Check if user wants numeric characters
  var hasNumeric = window.confirm(
    "Do you want numeric characters in your password?"
  );
  passParameters.special = hasNumeric;
  if (hasNumeric) {
    addEachCharacter(numbers);
  }

  // Check if user wants special characters
  var hasSpecial = window.confirm(
    "Do you want special characters in your password?"
  );
  passParameters.special = hasSpecial;
  if (hasSpecial) {
    addEachCharacter(symbols);
  }
};

///add parameters so it can be passed through
var generatePassword = function () {
  passPrompts();

  //builds keyword based on passParameters
  const keyword = [];

  for (var i = 0; i < passParameters.quantity; i++) {
    keyword.push(randomCharacter());
  }

  // change keyword into string and return
  let string = keyword.join("");
  return string;
};

// STARTER CODE BELOW
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

// console.log(randomCharacter());
// addEachCharacter(symbols);
console.log(selectedCharacters);
